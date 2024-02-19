import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import { PanelBody, PanelRow, Button } from '@wordpress/components';
import { useState } from 'react';
import MyToggleControl from '../components/MyToggleControl';
import MyNumberControl from '../components/MyNumberControl';

export default function Edit(props) {
	const [ editModeCarousel, setEditModeCarousel ] = useState( false );

	const ALLOWED_BLOCKS = ['create-block/carousel-slide-block'];

	function buttonCliked() {
		if(editModeCarousel){
			setEditModeCarousel(false);
		}else{
			setEditModeCarousel(true);
		}
	}

	return (
		<div {...useBlockProps()}>
			<div className="swiper-wrapper">
				<InspectorControls>
					<PanelBody>
						
						<PanelRow>
							<Button variant="primary" onClick={buttonCliked}>{editModeCarousel? 'Out of edit mode':'Edit block'}</Button>
						</PanelRow><br />
						
						<MyToggleControl name={'Autoplay'} attrName={'autoplay'} properties={props} />
						{props.attributes.autoplay?<MyNumberControl name={'Delay'} attrName={'delay'} properties={props} />:''}
						{props.attributes.autoplay?<MyNumberControl name={'Speed'} attrName={'speed'} properties={props} />:''}

						<MyToggleControl name={'Vertical'} attrName={'vertical'} properties={props} />
						<MyToggleControl name={'Show Bullets'} attrName={'showBullets'} properties={props}/>
						<MyToggleControl name={'Show Arrows'}  attrName={'showArrows'}properties={props}/>

					</PanelBody>
				</InspectorControls>

				{!editModeCarousel ? (
				<div class="carousel-editor">
					<p>CAROUSEL BLOCK</p>
				</div>
				):(
					<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					/>
				)}
			</div>
		</div>
	);
}

