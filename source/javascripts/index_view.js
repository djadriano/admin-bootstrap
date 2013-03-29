//= require templates/hero_form
//= require templates/highlights_form

IndexView = Backbone.View.extend({

  events : {
    'click .bt_add_form' : 'add_new_form',
    'click .close'       : 'remove_form'
  },

  initialize : function() {
    _.bindAll( this, 'add_new_form', 'remove_form' );
  },

  add_new_form : function( evt ) {
    evt.preventDefault();

    var el     = $( evt.currentTarget ),
      template = JST[ 'templates/' + el.data( 'template' ) ],
      data_template = {
        title : 'title',
        link  : 'link',
        text  : 'text'
      }

    $( template( data_template ) ).insertBefore( this.$( '.bt_submit' ) );
  },

  remove_form : function( evt ) {
    evt.preventDefault();

    var el = $( evt.currentTarget );

    el.parent().remove();
  }

});