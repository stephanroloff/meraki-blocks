import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import MyTextControl from '../components/MyTextControl';
import MyNumberControl from '../components/MyNumberControl';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';

export default function Edit(props) {
	const {attributes} = props;
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<p>Use Hexa with 6 digits</p>
					<p>For example: #26a8ff</p>
					<MyTextControl name={'Color 1'} attrName={'color1'} properties={props} />
					<MyNumberControl name={'Height (px)'} attrName={'height'} min ={0} properties={props} />
				</PanelBody>
			</InspectorControls>			
			<ServerSideRender
				block={metadata.name}
				attributes={{
					color1: attributes.color1,
					height: attributes.height
				}}
			/>
		</div>
	);
}
