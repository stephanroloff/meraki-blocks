import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';
import MyImageUpload from '../components/MyImageUpload';
import { PanelBody, PanelRow } from '@wordpress/components';

export default function Edit(props) {
	let {attributes} = props;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<p>Image</p>
						<div className="image-container">
							<MyImageUpload mediaURLAttrName={'MyImageUrl1'} properties={props}/>
						</div>
					</PanelRow>
					<PanelRow>
						<p>Hover Image</p>
						<div className="hover-image-container">
							<MyImageUpload mediaURLAttrName={'MyImageUrl2'} properties={props}/>
						</div>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<ServerSideRender
				block={metadata.name}
				attributes={{
					MyImageUrl1: attributes.MyImageUrl1,
					MyImageUrl2: attributes.MyImageUrl2
				}}
			/>
		</div>
	);
}
