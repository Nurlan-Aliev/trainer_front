export function Progress({count, len}){
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between'>
                <h2 className='fs-4'>Fill in the blank</h2>
                <div className='border fs-7 rounded px-1'>Question {count+1} of {len}</div>
            </div>

            <progress value={count} max={len}></progress>
        </div>
    )
}