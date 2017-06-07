/*
 *Created by : Umair Shahid
 *Version: 1 
 *Quiz plugin for Greenpeace
 *=================================*/

!function ($) {
    "use strict"; 

    var Quiz = function (element, options) {
        this.init(element, options)
    }

    Quiz.prototype = {
        constructor: Quiz, 
        init: function (element, options) {           
            this.$element = $(element);
            this.options = this.getOptions(options);	            
            this.questions = this.options.questions;
            this.currentQuestionNo = 0;
            this.questionBody = this.$element.find(".qestion-body");                                          
            this.nextButton = this.$element.find(".btn-next");
            this.backButton = this.$element.find(".btn-back");
            this.currentQuestion = this.questions[this.currentQuestionNo];
            this.drawQuestion(this.currentQuestion);
            
            this.nextButton.on("click",$.proxy(this.nextQuestion,this));
            this.backButton.on("click",$.proxy(this.prevQuestion,this));  
        },
        nextQuestion:function(){
            if(!this.nextButton.hasClass("disabled")){
                this.currentQuestionNo = this.currentQuestionNo + 1;
                this.currentQuestion = this.questions[this.currentQuestionNo];
                this.drawQuestion(this.currentQuestion);
                
                if(this.currentQuestionNo==this.questions.length-1){
                    this.nextButton.addClass("disabled");
                }
                if(this.currentQuestionNo>0){
                    this.backButton.removeClass("disabled");
                }
            }
        },
        prevQuestion:function(){
            if(!this.backButton.hasClass("disabled")){
                this.currentQuestionNo = this.currentQuestionNo - 1;
                this.currentQuestion = this.questions[this.currentQuestionNo];
                this.drawQuestion(this.currentQuestion);
                if(this.currentQuestionNo==0){
                    this.backButton.addClass("disabled");
                }                
                this.nextButton.removeClass("disabled");                
            }    
        }
        ,
        drawQuestion:function(q){
            if(q){                
                this.$element.find(".page-header h3").text((this.currentQuestionNo + 1)+"- "+q.questionText);
                if(q.type=="image"){
                    this.drawImageType(q);
                }
                else if(q.type=="text"){
                    this.drawTextType(q);
                }               
            }
        },
        drawImageType:function(q){
            var template = $('<div class="image-type"></div>')
            this.questionBody.hide().html(template).fadeIn();            
            var rowContainer = null;
            var that = this;
             $.each(q.options,function(i,opt){
                 if(i%3==0){
                     rowContainer = that.addImageRow(template);
                 }
                 var imgNode = that.addImageOption(opt);
                 rowContainer.append(imgNode);
                 imgNode.on("click",$.proxy(that.markSelected, that, i));  
             });
            
        },
        addImageRow:function(container){
            var imageRow = $('<div class="row"></div>');
            container.append(imageRow);
            return imageRow;
        },
        addImageOption: function (opt){
            return  $('<div class="col-sm-6 col-md-4">\n\
                    <div class="thumbnail">  \n\
                            <img src="'+opt.imgSrc+'" alt="">\n\
                        <div class="caption">\n\
                            <small>'+opt.category+'</small>\n\
                            <h4>'+opt.label+'</h4>\n\
                        </div>\n\
                        <div class="select-mask"></div>\n\
                        <button type="button" class="btn btn-success btn-lg select-button">Select</button>    \n\
                    </div> \n\
               </div>');
            
        }
        ,
        drawTextType:function(q){
            var template = $('<div class="text-type"></div>');            
            this.questionBody.hide().html(template).fadeIn(); 
            var textContainer = $('<div class="list-group"></div>');
            var that = this;
            template.html(textContainer);
            $.each(q.options,function(i,opt){          
                var textNode = that.textNode(opt);
                textContainer.append(textNode);
                textNode.on("click",$.proxy(that.markSelected, that, i));  
            });
        },
        textNode:function(opt){
            return $('<a href="#" class="list-group-item"><input type="checkbox"> '+opt.text+'</a>');
            
        },
        markSelected: function(index){
            var nodeClass = ".thumbnail";
            if(this.currentQuestion.type=="text"){
                nodeClass = ".list-group-item";
                this.questionBody.find(nodeClass+" input[type='checkbox']").prop("checked",false).eq(index).prop("checked",true);
            }            
            this.questionBody.find(nodeClass).removeClass("active").eq(index).addClass("active");            
        }
        , 
        getOptions: function (options) {
            options = $.extend({}, $.fn.quiz.defaults, options)    
            return options
        }
        , 
        tip: function () {
            return this.$tip = this.$tip || $(this.options.template)
        }
    }

    /* QUIZ PLUGIN DEFINITION
  * ========================= */

    $.fn.quiz = function ( option ) {
        return this.each(function () {
            var $this = $(this)
            , data = $this.data('quiz')
            , options = typeof option == 'object' && option
            if (!data) $this.data('quiz', (data = new Quiz(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.quiz.Constructor = Quiz

    $.fn.quiz.defaults = { 
        template:'',                   
        title:'Quiz Title',        
        questions:[],
    }

}(window.jQuery);