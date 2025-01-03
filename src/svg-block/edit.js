import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';
import TextareaControl from '../components/MyTextAreaControl';
import './editor.scss';


export default function Edit(props) {
	let { attributes } = props;
	// svgcode
	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<TextareaControl name={'SVG Code'} attrName={'svgcode'} properties={props} />
				</PanelBody>
			</InspectorControls>
			
			<ServerSideRender
				block={metadata.name}
				attributes={{
					svgcode: attributes.svgcode
				}}
			/>
		</div>
	);
}
