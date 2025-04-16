import { __ } from '@wordpress/i18n';
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';
import MySelectControl from '../components/MySelectControl';
import MyNumberControl from '../components/MyNumberControl';
import {fetchDataRestApi} from './helpers/fetch-data';

export default function Edit(props) {
	let {attributes} = props;

	const ALLOWED_BLOCKS = ['create-block/masonry-item-block'];

	let postTypeOptions = fetchDataRestApi();
	
	let columnsOptions = [
		{ value: '3', label: '3' },
		{ value: '4', label: '4' },
		{ value: '5', label: '5' },
	];
	let renderTypeOptions = [
		{ value: 'static', label: 'Static' },
		{ value: 'dynamic', label: 'Dynamic' },
	];

	return (
		<div {...useBlockProps({ className: `masonry-columns-${attributes.columns}` })}>
			<InspectorControls>
				<PanelBody>
					<MySelectControl label={'Render Type'} attrName={'renderType'} properties={props} options={renderTypeOptions}/>
					{props.attributes.renderType == 'dynamic'?
					<MySelectControl label={'Select Post Type'} attrName={'postType'} properties={props} options={postTypeOptions}/>					
					:
					''
					}
					<MySelectControl label={'Columns'} attrName={'columns'} properties={props} options={columnsOptions}/>

					{ props.attributes.columns === '3' ? (
						<>
							<MyNumberControl name={'Breakpoint Small (px)'} attrName={'breakpointSmall'} properties={props} />
							<MyNumberControl name={'Breakpoint Medium (px)'} attrName={'breakpointMedium'} properties={props} />
						</>
					) : props.attributes.columns === '4' ? (
						<>
							<MyNumberControl name={'Breakpoint Small (px)'} attrName={'breakpointSmall'} properties={props} />
							<MyNumberControl name={'Breakpoint Medium (px)'} attrName={'breakpointMedium'} properties={props} />
							<MyNumberControl name={'Breakpoint Large (px)'} attrName={'breakpointLarge'} properties={props} />
						</>
					) : props.attributes.columns === '5' ? (
						<>
							<MyNumberControl name={'Breakpoint Small (px)'} attrName={'breakpointSmall'} properties={props} />
							<MyNumberControl name={'Breakpoint Medium (px)'} attrName={'breakpointMedium'} properties={props} />
							<MyNumberControl name={'Breakpoint Large (px)'} attrName={'breakpointLarge'} properties={props} />
							<MyNumberControl name={'Breakpoint Extra Large (px)'} attrName={'breakpointExtraLarge'} properties={props} />
						</>
					) : null }

				</PanelBody>
			</InspectorControls>
			
			{attributes.renderType=='dynamic' ? (
				<div class="masonry-dynamic">
					<p>Masonry Dynamic</p>
				</div>
				):(
					<>
						<p className='masonry-notice'>Notice: The layout in the editor is not masonry. This is only applied on the frontend to avoid affecting the editor's performance.</p>
						<InnerBlocks
							allowedBlocks={ALLOWED_BLOCKS}
						/>
					</>
				)
			}
			
		</div>
	);
}
