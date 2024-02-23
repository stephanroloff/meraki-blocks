import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';	
import MyToggleControl from '../components/MyToggleControl';
import MyNumberControl from '../components/MyNumberControl';

export default function Edit(props) {
	const { attributes } = props;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<MyNumberControl name={'Number of pictures'} attrName={'amountSelected'} min ={0} properties={props} />
					<MyToggleControl name={'Overlay Hover'}  attrName={'overlayHover'}properties={props}/>
					<MyNumberControl name={'Image min width (px)'} attrName={'imageMinWidth'} min ={0} properties={props} />
				</PanelBody>
			</InspectorControls>

			<ServerSideRender
			block={metadata.name}
			attributes={{
				amountSelected: attributes.amountSelected,
				overlayHover: attributes.overlayHover,
				imageMinWidth: attributes.imageMinWidth
			}}
			/>
		</div>
	);
}
