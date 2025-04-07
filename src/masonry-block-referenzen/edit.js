import { __ } from '@wordpress/i18n';
import './editor.scss';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import MySelectControl from '../components/MySelectControl';
import MyNumberControl from '../components/MyNumberControl';

export default function Edit(props) {

	let columnsOptions = [
		{ value: '3', label: '3' },
		{ value: '4', label: '4' },
		{ value: '5', label: '5' },
	];

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
					<PanelBody>
						<MySelectControl label={'Columns'} attrName={'columns'} properties={props} options={columnsOptions}/>

						{ props.attributes.columns === '3' ? (
							<>
								<MyNumberControl name={'Breakpoint 1 (px)'} attrName={'breakpoint1'} properties={props} />
								<MyNumberControl name={'Breakpoint 2 (px)'} attrName={'breakpoint2'} properties={props} />
							</>
						) : props.attributes.columns === '4' ? (
							<>
								<MyNumberControl name={'Breakpoint 1 (px)'} attrName={'breakpoint1'} properties={props} />
								<MyNumberControl name={'Breakpoint 2 (px)'} attrName={'breakpoint2'} properties={props} />
								<MyNumberControl name={'Breakpoint 3 (px)'} attrName={'breakpoint3'} properties={props} />
							</>
						) : props.attributes.columns === '5' ? (
							<>
								<MyNumberControl name={'Breakpoint 1 (px)'} attrName={'breakpoint1'} properties={props} />
								<MyNumberControl name={'Breakpoint 2 (px)'} attrName={'breakpoint2'} properties={props} />
								<MyNumberControl name={'Breakpoint 3 (px)'} attrName={'breakpoint3'} properties={props} />
								<MyNumberControl name={'Breakpoint 4 (px)'} attrName={'breakpoint4'} properties={props} />
							</>
						) : null }

					</PanelBody>
			</InspectorControls>
			<p>Masonry Block Referenzen</p>
		</div>
	);
}
