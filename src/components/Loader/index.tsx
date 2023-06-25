import { Overlay } from './styles'

export default function Loader() {
  // return ReactDOM.createPortal(
  return (
    <>
      <Overlay>
        <div className="loader"></div>
      </Overlay>
      ,
    </>
  )
  // document.getElementById('loader-root')!
  // )
}
