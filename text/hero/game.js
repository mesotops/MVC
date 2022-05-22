
import {showDeleteList} from './showDeleteList.js';
import {showMakePage} from './showMakePage.js';
import {showUpdateList} from './showUpdateList.js';
import { showBagList } from './showBagList.js';

$(document).ready(function(){
    $("#make").click(function(){
        showMakePage();
    });

    $("#update").click(function(){
        showUpdateList();
    });

    $("#delete").click(function(){
        showDeleteList();
    });

    $("#bag").click(function(){
        showBagList();
    });
});