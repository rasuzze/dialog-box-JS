/**
 * Represents a dialog.
 * @constructor  (tas pats kas klase)
 * @param {string} typeSent - parodo žinutės tipą.
 * @param {string} messageSent - įterpia žinutę į dialogą.
 */

function Dialog(typeSent, messageSent){
    // var returnedData = new Object();
    // returnedData.div = this.makeContainer();
    // returnedData.message = messageSent;
    // returnedData.type = typeSent;
    this.container = this.makeContainer();
// $().unbind(); // sustabdo on click event'a
	
	this.container.find('.btn-danger').unbind('click').on('click', this.hideform.bind(this));
	this.container.find('.btn-success').unbind('click').on('click', this.hideform.bind(this));

    this.config(typeSent, messageSent);
    // return returnedData;
}

/* Dialog klasės metodas, kuris įterpia dialogo HTML kodą */
Dialog.prototype.makeContainer = function(){
    var div = $('<div class="panel panel-default">');
        div.append('<div class="panel-heading">'
        		+"<h3 class='panel-title'></h3>");
        div.append('<div class="panel-body">');
        div.append('<div class="panel-footer">' 
                    + "<a href='#' class='btn btn-success'>Yes</a>"
                    + "<a href='#' class='btn btn-danger pull-right'>No</a>"
                    + "</div>");
    return div;
}

/* Dialog klasės metodas, kuris parodo dialogą */
Dialog.prototype.show = function(){
	$('#insert .panel').remove();
    $('#insert').append(this.container);
    //alert('show');
}

/* Dialog klasės metodas, kuris paslepia dialogą */
Dialog.prototype.hideform = function(){
	this.container.remove();
}

Dialog.prototype.config = function(type, message){
	
	this.container.find('.panel-body').text(message);
	this.container.find('.panel-heading .panel-title').text(type);

	switch(type) {
		case 'Warning': 
			this.container.addClass('panel-warning');		

		break;

		case 'Success':
			this.container.addClass('panel-success');
			this.container.find('.btn-danger').hide();
			this.container.find('.btn-success').text('OK');
		break;

		case 'Error':
			this.container.addClass('panel-footer panel-danger');
		break;
	}
}