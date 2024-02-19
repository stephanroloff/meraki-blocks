import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save(props) {
    let {autoplay, delay, speed, vertical, showBullets, showArrows} = props.attributes
    const blockProps = useBlockProps.save({ className: 'swiper' });

    return (
        <div {...blockProps} 
            data-autoplay={autoplay} 
            data-speed={speed} 
            data-delay={delay}
            data-vertical={vertical}
            data-show-bullets={showBullets}
            data-show-arrows={showArrows}
        >
            <div className="swiper-wrapper">
                <InnerBlocks.Content />
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
}
