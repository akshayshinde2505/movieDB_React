import React from 'react';

class FooterApp extends React.Component {
    render() {
        const style = {
            footer : {
                "box-sizing": "border-box",
                "height": "100px",
                "background-color": "#eee",
                "border-top": "1px solid #e0e0e0",
                "padding-top": "35px"
              }
        }
        return(
            <footer >
                <div className={style.footer}>
                    <p>Copyright &copy; Some Company 2018</p>
                </div>
            </footer>
        )
    }
}

export default FooterApp;