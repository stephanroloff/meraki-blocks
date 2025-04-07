import './editor.scss';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import MyToggleControl from '../components/MyToggleControl';
import MyNumberControl from '../components/MyNumberControl';
import MySelectControl from '../components/MySelectControl';
import MyGalleryUpload from '../components/MyGalleryUpload';
import {fetchDataRestApi} from './helpers/fetch-data';


export default function Edit(props) {

	let postTypeOptions = fetchDataRestApi();
	postTypeOptions.push(
		{ value: 'all-post-types', label: 'All Post Types' },
	)
	
	let typeSelectOptions = [
		{ value: 'static', label: 'Static' },
		{ value: 'dynamic', label: 'Dynamic' },
	];

	let effectSelectOptions = [
		{ value: 'slide', label: 'Slide' },
		{ value: 'fade', label: 'Fade' },
	];

	let amountBreakpointsSelectOptions = [
		{ value: '1', label: '1' }, 
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
		{ value: '4', label: '4' },
		{ value: '5', label: '5' },
		{ value: '6', label: '6' },
	];

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<MySelectControl label={'Select Type'} attrName={'type'} properties={props} options={typeSelectOptions}/>					
					<div style={{height: '20px'}}></div>
					{props.attributes.type == 'static'?<MyGalleryUpload mediaURLAttrName={'fotosUrl'} properties={props}/>:''}
					{props.attributes.type == 'dynamic'?
					<MySelectControl label={'Select Post Type'} attrName={'postType'} properties={props} options={postTypeOptions}/>					
					:
					''
					}
					
					<div style={{height: '10px'}}></div>
					<MyToggleControl name={'Autoplay'} attrName={'autoplay'} properties={props} />
					{props.attributes.autoplay?<MyNumberControl name={'Delay (miliseconds)'} attrName={'delay'} properties={props} />:''}
					{props.attributes.autoplay?<MyNumberControl name={'Speed (miliseconds)'} attrName={'speed'} properties={props} />:''}

					<MySelectControl label={'Select effect'} attrName={'effect'} properties={props} options={effectSelectOptions}/>					
					{props.attributes.effect == "slide"?<MyToggleControl name={'Vertical'} attrName={'vertical'} properties={props}/>:''}
					<div style={{height: '10px'}}></div>

					<MyToggleControl name={'Show Bullets'} attrName={'showBullets'} properties={props}/>
					<MyToggleControl name={'Show Arrows'}  attrName={'showArrows'}properties={props}/>

					<MyNumberControl name={'Height (px)'} attrName={'maxHeight'} min ={0} properties={props} />
					<p>min-height: 300px</p>

					<div style={{height: '20px'}}></div>
					<MySelectControl label={'Slides per View'} attrName={'amountBreakpoints'} properties={props} options={amountBreakpointsSelectOptions}/>					
					<div style={{height: '20px'}}></div>
					{
						props.attributes.amountBreakpoints == "2" || 
						props.attributes.amountBreakpoints == "3" || 
						props.attributes.amountBreakpoints == "4" || 
						props.attributes.amountBreakpoints == "5" || 
						props.attributes.amountBreakpoints == "6"?
						<>
						<div style={{backgroundColor: '#E0E0E0', paddingLeft: '20px', paddingTop: '10px'}}>
							<MyNumberControl name={'Breakpoint to 1 Slide (px)'} attrName={'breakpoint1'} min ={0} properties={props} />
							<div style={{height: '20px'}}></div>
						</div>
						</>
						:
						''
					}
					{
						props.attributes.amountBreakpoints == "3" || 
						props.attributes.amountBreakpoints == "4" || 
						props.attributes.amountBreakpoints == "5" || 
						props.attributes.amountBreakpoints == "6"?
						<>
						<div style={{backgroundColor: 'transparent', paddingLeft: '20px', paddingTop: '10px'}}>
							<MyNumberControl name={'Breakpoint to 2 Slides (px)'} attrName={'breakpoint2'} min ={0} properties={props} />
							<div style={{height: '20px'}}></div>
						</div>
						</>
						:
						''
					}
					{
						props.attributes.amountBreakpoints == "4" || 
						props.attributes.amountBreakpoints == "5" || 
						props.attributes.amountBreakpoints == "6"? 
						<>
						<div style={{backgroundColor: '#E0E0E0', paddingLeft: '20px', paddingTop: '10px'}}>
							<MyNumberControl name={'Breakpoint to 3 Slides (px)'} attrName={'breakpoint3'} min ={0} properties={props} />
							<div style={{height: '20px'}}></div>
						</div>
						</>
						:
						''
					}
					{
						props.attributes.amountBreakpoints == "5" || 
						props.attributes.amountBreakpoints == "6"? 
						<>
						<div style={{backgroundColor: 'transparent', paddingLeft: '20px', paddingTop: '10px'}}>
							<MyNumberControl name={'Breakpoint to 4 Slides (px)'} attrName={'breakpoint4'} min ={0} properties={props} />
							<div style={{height: '20px'}}></div>
						</div>
						</>
						:
						''
					}
					{
						props.attributes.amountBreakpoints == "6"?
						<>
						<div style={{backgroundColor: '#E0E0E0', paddingLeft: '20px', paddingTop: '10px'}}>
							<MyNumberControl name={'Breakpoint to 5 Slides (px)'} attrName={'breakpoint5'} min ={0} properties={props} />
							<div style={{height: '20px'}}></div>
						</div>
						</>
						:
						''
					}
					
				</PanelBody>
			</InspectorControls>
			
			<div className='carousel-editor-container'>
				<p> {props.attributes.type.toUpperCase()} CAROUSEL {props.attributes.type == "dynamic"? `(${props.attributes.postType.toUpperCase()})` : '' }</p>
			</div>
		</div>
	);
}
