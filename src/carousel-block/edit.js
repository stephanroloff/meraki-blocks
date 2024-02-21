import './editor.scss';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import MyToggleControl from '../components/MyToggleControl';
import MyNumberControl from '../components/MyNumberControl';
import MyEditModeButton from '../components/MyEditModeButton';
import MySelectControl from '../components/MySelectControl';


export default function Edit(props) {
	let {editModeActive} = props.attributes
	const ALLOWED_BLOCKS = ['create-block/carousel-slide-block'];

	let effectSelectOptions = [
		{ value: 'slice', label: 'Slice' },
		{ value: 'fade', label: 'Fade' },
	];

	return (
		<div {...useBlockProps()} >
			<div className="swiper-wrapper">
				<InspectorControls>
					<PanelBody>
						
						<MyEditModeButton properties={props}/><br/>
						
						<MyToggleControl name={'Autoplay'} attrName={'autoplay'} properties={props} />
						{props.attributes.autoplay?<MyNumberControl name={'Delay (miliseconds)'} attrName={'delay'} properties={props} />:''}
						{props.attributes.autoplay?<MyNumberControl name={'Speed (miliseconds)'} attrName={'speed'} properties={props} />:''}

						<MySelectControl label={'Select effect'} attrName={'effect'} properties={props} options={effectSelectOptions}/>
						{props.attributes.effect == "slice"?<MyToggleControl name={'Vertical'} attrName={'vertical'} properties={props} />:''}
						
						<MyToggleControl name={'Show Bullets'} attrName={'showBullets'} properties={props}/>
						<MyToggleControl name={'Show Arrows'}  attrName={'showArrows'}properties={props}/>

						<MyNumberControl name={'Height (px)'} attrName={'height'} min ={0} properties={props} />
						<p>min-height: 300px</p>

					</PanelBody>
				</InspectorControls>

				{!editModeActive ? (
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

