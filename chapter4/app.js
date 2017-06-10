let buttonView = {
  label: 'underscore',
  onClick: function() {
    alert('clicked: ' + this.label);
  },
  onHover: function() {
    console.log('hovering: ' + this.label);
  }
};
_.bindAll(buttonView, 'onClick', 'onHover');

$('#underscore_button').on('click', buttonView.onClick);
$('#underscore_button').on('mouseenter', buttonView.onHover);