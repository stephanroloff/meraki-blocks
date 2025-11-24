import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';
import MyLottieUpload from './MyLottieUpload';
import MyToggleControl from '../components/MyToggleControl';
import MyNumberControl from '../components/MyNumberControl';
import { PanelBody } from '@wordpress/components';
import MySelectControl from '../components/MySelectControl';
import MyTextControl from '../components/MyTextControl';

export default function Edit(props) {
	let { attributes } = props;

	// Filtrar solo los atributos necesarios para el render (excluir lottieUrlId que solo se usa en el editor)
	const renderAttributes = {
		lottieUrl: attributes.lottieUrl || '',
		loop: attributes.loop !== undefined ? attributes.loop : false,
		reverse: attributes.reverse !== undefined ? attributes.reverse : false,
		speed: attributes.speed !== undefined ? attributes.speed : 1,
		width: attributes.width || '200',
		height: attributes.height || '200',
		animationTrigger: attributes.animationTrigger || 'autoplay',
		clickWhileAnimRuns: attributes.clickWhileAnimRuns || 'playuntilfinish',
		once: attributes.once !== undefined ? attributes.once : false,
		forward: attributes.forward !== undefined ? attributes.forward : false,
		otherTrigger: attributes.otherTrigger || '',
	};
	

	let animationTriggerOptions = [
		{ value: 'autoplay', label: 'Autoplay' },
		{ value: 'onhover', label: 'On Hover' },
		{ value: 'onscroll', label: 'On Scroll' },
		{ value: 'onclick', label: 'On Click' },
	];

	let clickWhileAnimRunsOptions = [
		{ value: 'playuntilfinish', label: 'Play until finish (no effect/event)' },
		{ value: 'stop', label: 'Stop' },
		{ value: 'pause', label: 'Pause' },
		{ value: 'invertDirection', label: 'Invert Direction' },
	];

	let textLabel = '';
	if(attributes.animationTrigger === 'onhover'){
		textLabel = 'On mouse out';
	} else if(attributes.animationTrigger === 'onclick'){
		textLabel = 'Click while animation runs';
	} 


	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<div style={{ marginBottom: "20px" }}>
						<p style={{ marginBottom: "10px", fontWeight: "bold" }}>Lottie Animation</p>
						<p style={{ fontSize: "11px" }}>Only JSON files are allowed</p>
						<MyLottieUpload mediaURLAttrName={'lottieUrl'} properties={props} />
					</div>
					<MySelectControl label={'Animation Trigger'} attrName={'animationTrigger'} properties={props} options={animationTriggerOptions} />
					
					{
					attributes.animationTrigger === 'onclick' ||
					attributes.animationTrigger === 'onhover'
					?
						<MySelectControl label={textLabel} attrName={'clickWhileAnimRuns'} properties={props} options={clickWhileAnimRunsOptions} />
					:''}

                    {
					attributes.animationTrigger === 'autoplay' || 
					attributes.animationTrigger === 'onclick' && attributes.forward === false && attributes.once === false ||
					attributes.animationTrigger === 'onhover' && attributes.forward === false && attributes.once === false
					?
						<MyToggleControl name={'Loop'} attrName={'loop'} properties={props} />
					:''}

                    {
					!attributes.loop &&
					(attributes.animationTrigger === 'autoplay' || 
					attributes.animationTrigger === 'onclick')
					?
						<MyToggleControl name={'Once'} attrName={'once'} properties={props} />
					:''}

                    {
					!attributes.loop &&
					(attributes.animationTrigger === 'autoplay' || 
					attributes.animationTrigger === 'onhover' ||
					attributes.animationTrigger === 'onclick')
					?
						<MyToggleControl name={'Forwards'} attrName={'forward'} properties={props} />
					:''}
	                
					{
					attributes.animationTrigger === 'autoplay' || 
					attributes.animationTrigger === 'onscroll'
					?
						<>
							<MyNumberControl name={'Height Activate (%)'} attrName={'heightStart'} properties={props} min={0} max={100} step={1} />
							<p style={{ fontSize: "11px", marginTop: "10px" }}>The animation starts at this screen percentage, with 0% at the bottom and 100% at the top.</p>
						</>
					:''}

				    <MyToggleControl name={'Reverse'} attrName={'reverse'} properties={props} />
					
					{
					attributes.animationTrigger === 'onhover' ||
					attributes.animationTrigger === 'onclick'
					?
					<MyTextControl name={'Other Trigger (use id)'} placeholder={'#id'} attrName={'otherTrigger'} properties={props} />

					:''}

					<MyNumberControl name={'Speed'} attrName={'speed'} properties={props} min={0} max={10} step={0.1} />
					<MyNumberControl name={'Width'} attrName={'width'} properties={props} min={100} max={1000} step={10} />
					<MyNumberControl name={'Height'} attrName={'height'} properties={props} min={100} max={1000} step={10} />
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				block={metadata.name}
				attributes={renderAttributes}
			/>
		</div>
	);
}
