	$(document).ready(function() {
		
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,basicWeek,basicDay'
			},
			defaultDate: '2023-06-01', //yyyy - mm - dd
			editable: true,
			eventLimit: true, // allow "more" link when too many events
			events: [
				{
					title: '[08:00] Baptism Class',
					start: '2023-06-06'
				},
				{
					title: '[10:00] Transforming Live',
					start: '2023-06-10'
				},			
				{
					title: '[09:00] Relationship With God',
					start: '2023-06-20'
				},
				{
					title: '[08:00] Abundant Life',
					start: '2023-06-26'
				},
				{
					title: '[08:00] God is Good',
					start: '2023-07-01'
				},
				{
					title: '[10:00] Jehovah Jireh',
					start: '2023-07-10'
				},
				
			]
		});
		
	});
