import '../components/loader/loader.scss';

export function MyLoader(props) {
    let { width, height } = props

    return (
        <>
            <div className="loader-spinner-container" style={{ height: `${height}px`, width: `${width}px` }}>
                <span className='loader-spinner-1'></span>
            </div>
        </>
    );
}