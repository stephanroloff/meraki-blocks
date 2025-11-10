import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, BaseControl, TextControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';
import MyMediaUpload from '../components/MyMediaUpload';
import MyTextControl from '../components/MyTextControl';
import MySelectControl from '../components/MySelectControl';
import './editor.scss';
import ServerSideRender from '@wordpress/server-side-render';
import metadata from './block.json';

export default function Edit(props) {
	const { attributes, setAttributes } = props;

	// Object-fit options
	const objectFitOptions = [
		{ value: 'fill', label: 'Fill' },
		{ value: 'contain', label: 'Contain' },
		{ value: 'cover', label: 'Cover' },
		{ value: 'none', label: 'None' },
		{ value: 'scale-down', label: 'Scale Down' }
	];

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="Image Settings">
					<MyMediaUpload 
						mediaIDAttrName="mediaId"
						mediaURLAttrName="mediaUrl"
						mediaAltAttrName="mediaAlt"
						properties={props}
					/>
				</PanelBody>
				
				<PanelBody title="Size Settings">
					<p>Use px, %, em, rem, vh, vw, etc. (e.g., 100px, 50%, 10em)</p>
					<MyTextControl 
						name="Height" 
						attrName="height" 
						properties={props} 
					/>
					<MyTextControl 
						name="Width" 
						attrName="width" 
						properties={props} 
					/>
					<MyTextControl 
						name="Max Height" 
						attrName="maxHeight" 
						properties={props} 
					/>
					<MyTextControl 
						name="Min Height" 
						attrName="minHeight" 
						properties={props} 
					/>
					<MyTextControl 
						name="Max Width" 
						attrName="maxWidth" 
						properties={props} 
					/>
					<MyTextControl 
						name="Min Width" 
						attrName="minWidth" 
						properties={props} 
					/>
				</PanelBody>

				<PanelBody title="Display Settings">
					<MySelectControl 
						label="Object Fit" 
						attrName="objectFit" 
						properties={props} 
						options={objectFitOptions}
					/>
				</PanelBody>

				<PanelBody title="Overlay Settings">
					<BaseControl label="Overlay Color">
						<input
							type="color"
							value={attributes.overlayColor}
							onChange={(e) => {
								console.log('Setting overlayColor to:', e.target.value);
								setAttributes({ overlayColor: e.target.value });
							}}
							style={{ width: '100%', height: '40px', border: '1px solid #ddd', borderRadius: '4px' }}
						/>
						<p style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
							Current: {attributes.overlayColor}
						</p>
					</BaseControl>
					
					<NumberControl
						label="Overlay Opacity"
						value={attributes.overlayOpacity}
						onChange={(value) => {
							const numValue = parseFloat(value);
							console.log('Setting overlayOpacity to:', numValue, typeof numValue);
							setAttributes({ overlayOpacity: numValue });
						}}
						min={0}
						max={1}
						step={0.1}
					/>
					<p style={{ fontSize: '12px', color: '#666' }}>
						Current: {attributes.overlayOpacity} (Type: {typeof attributes.overlayOpacity})
					</p>
				</PanelBody>
			</InspectorControls>
			
			{/* Preview */}
			<div className="custom-image-block-preview">
				{attributes.mediaUrl ? (
					<div className="custom-image-block__container">
						<img 
							src={attributes.mediaUrl} 
							alt={attributes.mediaAlt || ''}
							className="custom-image-block__image"
							style={{
								height: attributes.height || 'auto',
								width: attributes.width || '100%',
								maxHeight: attributes.maxHeight || 'none',
								minHeight: attributes.minHeight || 'auto',
								maxWidth: attributes.maxWidth || '100%',
								minWidth: attributes.minWidth || 'auto',
								objectFit: attributes.objectFit || 'cover'
							}}
						/>
						{attributes.overlayOpacity > 0 && (
							<div 
								className="custom-image-block__overlay"
								style={{
									backgroundColor: attributes.overlayColor,
									opacity: attributes.overlayOpacity
								}}
							></div>
						)}
					</div>
				) : (
					<div className="custom-image-block__placeholder">
						<p>Please select an image to display</p>
					</div>
				)}
			</div>
		</div>
	);
}
