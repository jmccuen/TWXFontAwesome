TW.Runtime.Widgets.fontawesomeicon= function () {
    var thisWidget = this;
    var spanElement;
	var isDisabled = false;
	var widgetProperties;

	this.renderHtml = function () {
	    var isStacked = this.getProperty("Stacked");
	    var html = '<div class="widget-content widget-fontawesomeicon">';
	    if (isStacked) {
	        html += '<span class="fa-stack fa-lg">' +
		        '<i class="fa ' + this.getProperty('StackedClass') + '"></i>' +
                '<i class="fa ' + this.getProperty('FontAwesome Class') + '"></i>' + this.getProperty('Text') +
                '</span>';
	    } else {
	        html += '<span>' +
                '<i class="fa ' + this.getProperty('FontAwesome Class') + '"></i>' + this.getProperty('Text') + 
                '</span>';
	    }
	    html += '</div>';

		return html;
	};

	var buttonOnClick = function(e) {
		e.stopPropagation();
		e.preventDefault();
		if (!isDisabled) {
			//TW.log.info('button enabled');
			if (widgetProperties['ConfirmationRequired']) {
				var label1 = Encoder.htmlEncode(thisWidget.getProperty('ConfirmationButton1Label'));
				var label2 = Encoder.htmlEncode(thisWidget.getProperty('ConfirmationButton2Label'));

				var button1default = widgetProperties['DefaultConfirmationButton'] === 'button1';
				var button1cancel = widgetProperties['CancelConfirmationButton'] === 'button1';

				var buttons = {};

				buttons[label1] = {
					'class': 'blue',
					'action': function () {
						if (!button1cancel) {
							thisWidget.jqElement.triggerHandler('Clicked');
						}
					},
					'default': button1default
				};

				buttons[label2] = {
					'class': 'gray',
					'action': function () {
						if (button1cancel) {
							thisWidget.jqElement.triggerHandler('Clicked');
						}
					},
					'default': !button1default
				};

				$.confirm({
					'title': Encoder.htmlEncode(thisWidget.getProperty('ConfirmationTitle')),
					'message': Encoder.htmlEncode(thisWidget.getProperty('ConfirmationPrompt')),
					'buttons': buttons
				});
			}
			else {
				
				thisWidget.jqElement.triggerHandler('Clicked');
			}
		}
	}

	this.afterRender = function () {

	    var isButton = this.getProperty("isButton");
	    isDisabled = this.getProperty("Disabled");

		widgetProperties = thisWidget.properties;

		var color = this.getProperty('Color');
		var backgroundColor = this.getProperty('BackgroundColor');
		var hoverColor = this.getProperty('HoverColor');
		var fontSize = this.getProperty('FontSize');
		var textShadow = this.getProperty('TextShadowCss');
		var stackedColor = this.getProperty('StackedColor');
		var textAlign = this.getProperty("Aligment");
		var pressedColor = this.getProperty("PressedColor");
		var disabledColor = this.getProperty("DisabledColor");
		var padding = this.getProperty("Padding");
		var horizontalAlignment = this.getProperty("HorizontalAlignment");
		var verticalAlignment = this.getProperty("VerticalAlignment");

		var style = 'font-size: ' + fontSize + '; ' +
					'background-color: ' + backgroundColor + '; ' +
					'color: ' + color + '; ' +
					'text-align: ' + textAlign + '; ' +
					'text-shadow: ' + textShadow + ';' +
                    'padding: ' + padding + ';' +
                    'align-items: ' + verticalAlignment + ';' +
                    'justify-content: ' + horizontalAlignment + ';';

		var widgetStyles =
        '<style>' +
		'#' + thisWidget.jqElementId + '.widget-fontawesomeicon {' + style + '} ' +
		'#' + thisWidget.jqElementId + '.widget-fontawesomeicon > span  > i.' + this.getProperty("StackedClass") + ' { color:' + stackedColor + '} ' +
        '#' + thisWidget.jqElementId + '.widget-fontawesomeicon > span.button { cursor:pointer} ' +
        '#' + thisWidget.jqElementId + '.widget-fontawesomeicon > span.button:hover { color:' + hoverColor + '} ' +
        '#' + thisWidget.jqElementId + '.widget-fontawesomeicon > span.button:active { color:' + pressedColor + '} ' +
        '#' + thisWidget.jqElementId + '.widget-fontawesomeicon > span.disabled { color:' + disabledColor + '} ' +
        '</style>';

		$(widgetStyles).prependTo(thisWidget.jqElement);

		spanElement = thisWidget.jqElement.find("span");

		if (isDisabled) {
		    spanElement.addClass('disabled');
		} else if (isButton) {
		    spanElement.addClass('button');
		    spanElement.bind('click', buttonOnClick);
		}

	};

	// this is called on your widget anytime bound data changes
	this.updateProperty = function (updatePropertyInfo) {
		// validators may constantly being setting this to enabled/disabled based
		// on other events in the system, before we take the action to 
		// bind/unbind etc we should make sure we're in the appropriate state		
		if (updatePropertyInfo.TargetProperty === 'Disabled') {
			if (updatePropertyInfo.RawSinglePropertyValue === true) {
				if (isDisabled === false) {
					isDisabled = true;
					spanElement.unbind('click');
					spanElement.addClass('disabled');
					spanElement.removeClass('button');
				}
			} else {
				if (isDisabled === true) {
					isDisabled = false;
					spanElement.removeClass('disabled');
					spanElement.addClass('button');
					spanElement.bind('click', buttonOnClick);
				}
			};
        };
        
	};
};