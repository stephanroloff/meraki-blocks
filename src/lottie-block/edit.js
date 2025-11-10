import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';
import MyLottieUpload from './MyLottieUpload';
import MyToggleControl from '../components/MyToggleControl';
import MyNumberControl from '../components/MyNumberControl';
import { PanelBody } from '@wordpress/components';

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
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<div style={{ marginBottom: "20px" }}>
						<p style={{ marginBottom: "10px", fontWeight: "bold" }}>Lottie Animation</p>
						<p style={{ fontSize: "11px" }}>Only JSON files are allowed</p>
						<MyLottieUpload mediaURLAttrName={'lottieUrl'} properties={props} />
					</div>
					<MyToggleControl name={'Loop'} attrName={'loop'} properties={props} />
					<MyToggleControl name={'Reverse'} attrName={'reverse'} properties={props} />
					<MyNumberControl name={'Speed'} attrName={'speed'} properties={props} min={0} max={10} step={0.1} />
					<MyNumberControl name={'Width'} attrName={'width'} properties={props} min={100} max={1000} step={10} />
					<MyNumberControl name={'Height'} attrName={'height'} properties={props} min={100} max={1000} step={10} />
				</PanelBody>
			</InspectorControls>
			<div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: attributes.width + 'px', height: attributes.height + 'px', backgroundColor: "#5d5d5d	", padding: "10px" }}>
				<p style={{ textAlign: "center", fontSize: "14px", color: "#fff" }}>Lottie Block</p>
			</div>
			<ServerSideRender
				block={metadata.name}
				attributes={renderAttributes}
			/>
		</div>
	);
}
