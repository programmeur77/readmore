$(document).ready(function(){
	const $messageContainer = $('#message-content');
	const $paragraph = $('#show');
	const $showMore = $('#show-more');
	const $showLess = $('#show-less');

	const $paragraphHeight = $paragraph.outerHeight();
	const $messageContainerHeight = $messageContainer.outerHeight();

	var $result = calculateHeight($paragraphHeight, $messageContainerHeight);

	console.log($newContainerHeight);

	if ($result === true) {
		$showMore.css('display', 'block');
		
		$showMore.click(function() {
			console.log('1');
			$showMore.html('En voir moins');
			console.log('2')
			$messageContainer.css({
				transition: 'height 1s',
				height: $paragraphHeight + 'px'
			})
		})

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