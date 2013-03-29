//= require jquery.min
//= require bootstrap-tab
//= require underscore-min
//= require json2
//= require backbone-min

//= require index_view

//= require_self

$(function() {
  new IndexView({ el : '#tab1' });
  new IndexView({ el : '#tab2' });
})