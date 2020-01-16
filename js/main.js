$( document ).ready( function ()
{
  var value = $( '.form-group .form-control' );

  var forContent = $( '.form-group .label-signup' );
  value.focus( function ()
  {
    forContent.css( { "font-size": "12px" } );

  } );
  value.blur( function ()
  {
    forContent.css( { "font-size": "15px" } );
  } );
} );