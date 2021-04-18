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
		$showLess.css('display', 'none');
		$showMore.click(function(e){
			$messageContainer.css({
				transition: 'height 1s',
				height: $paragraphHeight + 'px'
			})
			$showMore.css('display', 'none');
			$showLess.css('display', 'block');
			$showLess.click(function(e){
				console.log('OK');
				$messageContainer.css({
					transition: 'height 0.2s',
					height: $messageContainerHeight + 'px'
				})
				$showLess.css('display', 'none');
				$showMore.css('display', 'block');
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