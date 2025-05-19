import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPicker } from '@wordpress/components';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';
import MyNumberControl from '../components/MyNumberControl';

export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { color1, color2, width, height, opacity } = attributes;

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title={__('CSS Controls', 'tu-text-domain')} initialOpen={true}>
					<MyNumberControl name={'Width (px)'} attrName={'width'} min ={0} properties={props} />
					<MyNumberControl name={'Height (px)'} attrName={'height'} min ={0} properties={props} />
					<MyNumberControl name={'Opacity'} attrName={'opacity'} min ={0} max={1} properties={props} />
					<div style={{height:'20px'}}></div>
					<p>{__('COLOR 1', 'tu-text-domain')}</p>
					<ColorPicker
						color={color1}
						onChangeComplete={(value) => setAttributes({ color1: value.hex })}
						disableAlpha
					/>

					<div style={{ height: '20px' }}></div>

					<p>{__('COLOR 2', 'tu-text-domain')}</p>
					<ColorPicker
						color={color2}
						onChangeComplete={(value) => setAttributes({ color2: value.hex })}
						disableAlpha
					/>
				</PanelBody>
			</InspectorControls>

			<ServerSideRender
				block={metadata.name}
				attributes={{ color1, color2, width, height, opacity }}
			/>
		</div>
	);
}
