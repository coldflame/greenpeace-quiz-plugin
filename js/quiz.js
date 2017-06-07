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

        constructor: Quiz

        , 
        init: function (element, options) {           
            this.$element = $(element)
            this.options = this.getOptions(options)	
            var template = $(this.options.template);
            if(template != '')
            {
                template.find(".bDiv").css("height",this.options.gridHeight)
                this.$element.find(this.options.rightCol).append(template)
            }
            this.mappingInit()                  
        }
        ,
        mappingInit:function(){
	 
        }  
        ,
        moveAll:function(){
            this.$element.find(".col1 .bmsgrid tr .move-row").click()
        },
        getCol2:function(){
            return this.options.rightCol;
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
        template:'<div class="container"> </div>',                   
        title:'Quiz Title',        
        leftCol:".col1 .leftcol",
        moveSelector:".move-row",        
        loadTarget: '',
        copyTarget: ''
    }

}(window.jQuery);