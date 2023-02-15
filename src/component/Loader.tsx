import './loader.css';

export function Loader() {
    return (
        <p className="round centralize">
            <span className="ouro ouro3">
                <span className="left"><span className="anim"></span></span>
                <span className="right"><span className="anim"></span></span>
            </span>
            <p>Wait a moment...</p>
            <p>If this page doesn't render after 30 seconds, it probably doesn't exist :(</p>
        </p>
    )
}