$(document).ready(function(){
	$("#tableAccountKH tbody tr").click(function(){
		var tableData =$(this).children("td").map(function(){
			return $(this).text();
		}).get();
		var td=tableData[2];
		alert(td);
	});
});
$(document).ready(function(){
	$("#tableAccountQL tbody tr").click(function(){
		var tableData =$(this).children("td").map(function(){
			return $(this).text();
		}).get();
		var td=tableData[2];
		alert(td);
	});
});