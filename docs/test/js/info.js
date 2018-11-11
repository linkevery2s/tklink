$(function(){
	
	//HTMLを初期化
	$("table.tbl tbody").html("");
	
	//HTMLを生成
	$.getJSON("https://linkevery2s.github.io/tklink/test/json/tkmetro.json", function(data){
		$(data.release).each(function(){
			$('<tr>'+
			  '<th>'+this.title+'</th>'+
			  '<td class="label">' + this.day + '</td>'+
			
		'</tr>').appendTo('table.tbl tbody');
		})
	})
	
});