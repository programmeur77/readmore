$(document).ready(function(){
	const $messageContainer = $('#message-content');
	const $paragraph = $('#show');
	const $showMore = $('#show-more');
	const $showLess = $('#show-less');

	const $paragraphHeight = $paragraph.outerHeight();
	const $messageContainerHeight = $messageContainer.outerHeight();

	var $result = calculateHeight($paragraphHeight, $messageContainerHeight);

	if ($result === true) {
		$showMore.css('display', 'block');
		
		if ($showMore.attr('id') === 'show-more') {
			$showMore.click(function(e) {
				$messageContainer.css({
					transition: 'height 1s',
					height: $paragraphHeight + 'px'
				})
				$showMore.html('En voir moins');
			})
		} 

			$showMore.prop('id', 'show-less');

			console.log('OK');

		/*if ($showMore.attr('id') === 'show-less') {
			$showMore.click(function(e) {
				$messageContainer.css({
					transition: 'height 1s',
					height: $messageContainerHeight + 'px'
				})
				$showMore.html('En lire plus');
			})
		} */

		// $showMore.prop('id', 'show-more');

	} else {
		$showMore.css('display', 'none');
	}

	function calculateHeight(paragraphHeight, messageContainerHeight) {
		if (paragraphHeight > messageContainerHeight) {
			return true;
		} else {
			return false;
		}
	}
})