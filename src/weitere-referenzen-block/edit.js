import { __ } from '@wordpress/i18n';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';
import {fetchDataRestApi} from './helpers/fetch-data';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import MySelectControl from '../components/MySelectControl';

export default function Edit(props) {
	let {attributes} = props;
	let postTypeOptions = fetchDataRestApi();

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<div style={{height: '20px'}}></div>
					<MySelectControl label={'Select Post Type'} attrName={'postType'} properties={props} options={postTypeOptions}/>					
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				block={metadata.name}
				attributes={{
					postType: attributes.postType
				}}
			/>
		</div>
	);
}
