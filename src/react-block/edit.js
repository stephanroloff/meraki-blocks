import { __ } from '@wordpress/i18n';
import './editor.scss';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import MyImageUpload from '../components/MyImageUpload';

export default function Edit(props) {
	let {attributes} = props;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody style={{ display: "flex", flexDirection: "column" }} className='ajuera'>
					<p>My Image</p>
					<MyImageUpload mediaURLAttrName={'MyImageUrl'} properties={props}/>
				</PanelBody>
			</InspectorControls>
			<div className="flex justify-center">REACT BLOCK</div>
		</div>
	);
}
