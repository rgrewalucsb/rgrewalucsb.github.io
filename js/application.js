$(document).ready(function(){
	$.cloudinary.config({ cloud_name: 'dbc', api_key: '327488173822848'})

	/*jslint unparam: true */
	/*global window, $ */
	$(function () {
	    'use strict';

	    var url = window.location.hostname === 'rgrewal.me' ?
	    'https://api.cloudinary.com/v1_1/dbc/image/file/upload/';
	    $('#fileupload').fileupload({
	        url: url,
	        dataType: 'json',
	        done: function (e, data) {
	            $.each(data.result.files, function (index, file) {
	                $('<p/>').text(file.name).appendTo('#files');
	            });
	        },
	        progressall: function (e, data) {
	            var progress = parseInt(data.loaded / data.total * 100, 10);
	            $('#progress .progress-bar').css(
	                'width',
	                progress + '%'
	            );
	        }
	    }).prop('disabled', !$.support.fileInput)
	        .parent().addClass($.support.fileInput ? undefined : 'disabled');
	});

});