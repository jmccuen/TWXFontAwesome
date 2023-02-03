TW.IDE.Widgets.fontawesomeicon = function () {

	this.widgetIconUrl = function() {
		return  "'../Common/extensions/FontAwesomeIcon/ui/fontawesomeicon/FontAwesomeIcon.png'";
	};

	this.widgetProperties = function () {
		return {
			'name': 'FontAwesomeIcon',
			'description': '',
			'category': ['Common'],
			'supportsAutoResize': true,
			'properties': {
				'FontAwesome Class': {
					'baseType': 'STRING',
					'defaultValue': 'fa-superpowers',
					'isBindingTarget': true,
                    'description': 'The font awesome CSS class for the icon you want to display. A full list can be found at http://fontawesome.io/icons/'
				},
				'Width': {
                    'description': 'Width of the containing div',
                    'defaultValue': 100
                },
                'Height': {
                    'description': 'Height of the containing div',
                    'defaultValue': 100
                },
                'VerticalAlignment': {
                    'baseType': 'STRING',
                    'defaultValue': 'Middle',
                    'selectOptions': [
                        { value: 'flex-start', text: 'Top' },
                        { value: 'center', text: 'Middle' },
                        { value: 'flex-end', text: 'Bottom' }
                    ],
                    'description': 'Vertical alignment of the icon inside the div'
                },
                'HorizontalAlignment': {
                    'baseType': 'STRING',
                    'defaultValue': 'Center',
                    'selectOptions': [
                        { value: 'flex-start', text: 'Left' },
                        { value: 'center', text: 'Center' },
                        { value: 'flex-end', text: 'Right' }
                    ],
                    'description': 'Horizontal alignment of the icon inside the div'
                },
                'Padding': {
                    'baseType': 'STRING',
                    'defaultValue': '0px 0px 0px 0px',
                    'description': 'Padding CSS values. This will offset the icon from the set alignment.'
                },
                'Color': {
                    'baseType': 'STRING',
					'defaultValue': '#000',
                    'description': 'Color of the icon and text'
                },
                'isButton': {
                    'baseType': 'BOOLEAN',
					'defaultValue': false,
                    'description': 'Indicates whether or not this icon is clickable. Also enables the HoverColor, PressedColor, Disabled, and DisabledColor properties.'
                },
                'ConfirmationRequired': {
                    'description': TW.IDE.I18NController.translate('tw.button-ide.properties.confirmation-required.description'),
                    'defaultValue': false,
                    'baseType': 'BOOLEAN'
                },
                'ConfirmationTitle': {
                    'description': TW.IDE.I18NController.translate('tw.button-ide.properties.confirmation-title.description'),
                    'defaultValue': 'Confirm Action',
                    'baseType': 'STRING',
                    'isLocalizable': true
                },
                'ConfirmationPrompt': {
                    'description': TW.IDE.I18NController.translate('tw.button-ide.properties.confirmation-prompt.description'),
                    'defaultValue': 'Do Action?',
                    'baseType': 'STRING',
                    'isLocalizable': true
                },
                'ConfirmationButton1Label': {
                    'description': TW.IDE.I18NController.translate('tw.button-ide.properties.confirmation-button1-label.description'),
                    'defaultValue': 'Yes',
                    'baseType': 'STRING',
                    'isLocalizable': true
                },
                'ConfirmationButton2Label': {
                    'description': TW.IDE.I18NController.translate('tw.button-ide.properties.confirmation-button2-label.description'),
                    'defaultValue': 'No',
                    'baseType': 'STRING',
                    'isLocalizable': true
                },
                'DefaultConfirmationButton': {
                    'description': TW.IDE.I18NController.translate('tw.button-ide.properties.default-confirmation-button.description'),
                    'baseType': 'STRING',
                    'defaultValue': 'button1',
                    'selectOptions': [
                        { value: 'button1', text: TW.IDE.I18NController.translate('tw.button-ide.properties.default-confirmation-button.select-options.button1') },
                        { value: 'button2', text: TW.IDE.I18NController.translate('tw.button-ide.properties.default-confirmation-button.select-options.button2') }
                    ]
                },
                'CancelConfirmationButton': {
                    'description': TW.IDE.I18NController.translate('tw.button-ide.properties.cancel-confirmation-button.description'),
                    'baseType': 'STRING',
                    'defaultValue': 'button2',
                    'selectOptions': [
                        { value: 'button1', text: TW.IDE.I18NController.translate('tw.button-ide.properties.default-confirmation-button.select-options.button1') },
                        { value: 'button2', text: TW.IDE.I18NController.translate('tw.button-ide.properties.default-confirmation-button.select-options.button2') }
                    ]
                },
                'HoverColor': {
                    'baseType': 'STRING',
					'defaultValue': '#000',
                    'description': 'Color of the icon on hover',
                    isVisible: false
                },

                'PressedColor': {
                    'baseType': 'STRING',
					'defaultValue': '#000',
                    'description': 'Color of the icon on mouse click',
                    isVisible: false
                },
				'Disabled': {
                    'description':  'Allows you to enable/disable the button dynamically',
                    'baseType':        'BOOLEAN',
                    'defaultValue':    false,
                    'isBindingTarget': true,
                    isVisible: false
                },
                'DisabledColor': {
                    'baseType': 'STRING',
					'defaultValue': '#CCC',
                    'description': 'Color of the button when disabled',
                    isVisible: false                    
                },
                'BackgroundColor': {
                    'baseType': 'STRING',
					'defaultValue': 'transparent',
                    'description': 'Background color of the icon'
                },
                'FontSize': {
                    'baseType': 'STRING',
					'defaultValue': '100px',
                    'description': 'Size of the icon. This should usually match the width or height of the div. This can also be made more responsive by using viewport width or height instead of pixels'
                },
                'Text': {
                    'baseType': 'STRING',
					'defaultValue': '',
                    'description': 'Text label to appear to the right of the icon'
                },
                'TextShadowCss': {
                    'baseType': 'STRING',
					'defaultValue': '1px 1px 1px #ccc',
                    'description': 'CSS shadow attribute for the icon text'
                },
                'Alignment': {
                    'baseType': 'STRING',
					'defaultValue': 'center',
                    'description': '',
                    isVisible: false
                },
                'Stacked': {
                    'baseType': 'BOOLEAN',
					'defaultValue': false,
                    'description': '',
                    isVisible: false
                },
                'StackedClass': {
                    'baseType': 'STRING',
					'defaultValue': 'fa-circle fa-stack-2x',
                    'description': '',
                    isVisible: false
                },
                'StackedColor': {
                    'baseType': 'STRING',
					'defaultValue': '#000',
                    'description': '',
                    isVisible: false
                }
			}
		}
	};

	this.widgetEvents = function () {
        return {
            'Clicked': { 'warnIfNotBound': false }
        };
    };


	this.afterSetProperty = function (name, value) {
        switch (name) {
            case 'isButton':
            case 'Stacked': 
                this.updateVisibleProperties();
                TW.IDE.updateWidgetPropertiesWindow();
        };        
		return true;
	};

	this.renderHtml = function () {
	    var isStacked = this.getProperty("Stacked");

		var html = 	'<div class="widget-content widget-fontawesomeicon">';
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
    
    this.updateVisibleProperties = function() {
        var props = this.allWidgetProperties()["properties"];
        var isButton = this.getProperty('isButton');
        var isStacked = this.getProperty('Stacked');

        props['HoverColor']['isVisible'] = isButton;
        props['PressedColor']['isVisible'] = isButton;
        props['DisabledColor']['isVisible'] = isButton;
        props['Disabled']['isVisible'] = isButton

        props['ConfirmationRequired']['isVisible'] = isButton
        props['ConfirmationTitle']['isVisible'] = isButton
        props['ConfirmationPrompt']['isVisible'] = isButton
        props['ConfirmationButton1Label']['isVisible'] = isButton
        props['ConfirmationButton2Label']['isVisible'] = isButton
        props['DefaultConfirmationButton']['isVisible'] = isButton
        props['CancelConfirmationButton']['isVisible'] = isButton

        props['StackedClass']['isVisible'] = isStacked;
        props['StackedColor']['isVisible'] = isStacked;
    }

	this.afterRender = function () {
		// NOTE: this.jqElement is the jquery reference to your html dom element
		// 		 that was returned in renderHtml()

		var isButton =  this.getProperty("isButton");
		var isDisabled = this.getProperty("Disabled");

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
		'#' + this.properties['Id'] + '.widget-fontawesomeicon {' + style + '} ' +
		'#' + this.properties['Id'] + '.widget-fontawesomeicon > span  > i.' + this.getProperty("StackedClass") + ' { color:' + stackedColor + '} ' +
        '#' + this.properties['Id'] + '.widget-fontawesomeicon > span.button { cursor:pointer} ' +
        '#' + this.properties['Id'] + '.widget-fontawesomeicon > span.button:hover { color:' + hoverColor + '} ' +
        '#' + this.properties['Id'] + '.widget-fontawesomeicon > span.button:active { color:' + pressedColor + '} ' +
        '#' + this.properties['Id'] + '.widget-fontawesomeicon > span.disabled { color:' + disabledColor + '} ';

		if (isDisabled) {
		    this.jqElement.addClass("disabled");
		} else if (isButton) {
		    this.jqElement.addClass("button");
		}
		

		TW.IDE.getMashupResource().styles.append(widgetStyles);
	};

};