
import {showDeleteList} from './showDeleteList.js';
import {doSelect} from './doSelect.js';
import {showInsertPage} from './showInsertPage.js';
import {showUpdateList} from './showUpdateList.js';

$(document).ready(function(){
    $("#insert").click(function(){
        showInsertPage();
    });

    $("#update").click(function(){
        showUpdateList();
    });

    $("#delete").click(function(){
        showDeleteList();
    });

    $("#select").click(function(){
        doSelect();
    });
});