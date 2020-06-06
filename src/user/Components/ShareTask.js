import React, { Component } from "react";
import share from "../images/share.svg";
import "./Sharetask.css";

class ShareTask extends Component {
  constructor(props){
    super(props);
    this.state = {
   
    };
  }

  render() {
   
    return (
      <div className="ShareTask">
      <div className="ShareTaskCard">
      {/* <img src={share} alt="shareTask"></img> */}
      <svg className = "shareTask" width="30px" height="30px" viewBox="3 -6 30 30"><defs><mask id="svgm-0.7891038859204536" x="0" y="0" width="30" height="30"><rect width="30" height="30" fill="#000"></rect><g transform="translate(0.000000, 7.000000)" fill="#FFF"><path fill="white" d="M21.0640387,15.883343 C22.1324802,15.883343 23.1341441,16.0168165 24.0022529,16.1502899 C25.6049151,16.4172369 26.940467,16.6174471 27.8753533,15.8166063 C28.4763517,15.3494491 28.743462,14.4818716 28.743462,13.2806103 C28.743462,10.5444042 27.274355,8.47556539 24.4029184,7.27430415 C25.0706944,6.47346333 25.4713599,5.4724123 25.4713599,4.40462453 C25.4713599,2.00210206 23.4680321,0 21.0640387,0 C18.6600453,0 16.6567175,2.00210206 16.6567175,4.40462453 C16.6567175,5.4724123 17.0573831,6.47346333 17.725159,7.27430415 C14.8537225,8.47556539 13.3846154,10.5444042 13.3846154,13.2806103 C13.3846154,14.4818716 13.6517258,15.2827124 14.2527241,15.8166063 C15.254388,16.6841838 17.391271,16.2837634 18.1258246,16.1502899 C18.9939333,16.0168165 19.9955972,15.883343 21.0640387,15.883343 Z M21.0640387,1.40147144 C22.7334786,1.40147144 24.135808,2.80294288 24.135808,4.47136127 C24.135808,6.13977965 22.7334786,7.54125109 21.0640387,7.54125109 C19.3945989,7.54125109 17.9922694,6.13977965 17.9922694,4.47136127 C17.9922694,2.80294288 19.3945989,1.40147144 21.0640387,1.40147144 Z M15.1208328,14.8155552 C14.8537225,14.615345 14.7201673,14.0814512 14.7201673,13.3473471 C14.7201673,10.8780879 16.1224967,9.27640621 18.9271557,8.34209191 C19.5281541,8.67577559 20.2627076,8.8759858 21.0640387,8.8759858 C21.8653698,8.8759858 22.5999234,8.67577559 23.2009217,8.34209191 C26.0055807,9.27640621 27.4079102,10.9448246 27.4079102,13.3473471 C27.4079102,14.0814512 27.274355,14.615345 27.0072446,14.8155552 C26.5398014,15.2159757 25.4713599,15.0157654 24.2025856,14.8155552 C23.2676993,14.6820818 22.1992578,14.4818716 21.0640387,14.4818716 C19.9288196,14.4818716 18.8603781,14.615345 17.9254918,14.8155552 C16.6567175,15.0825022 15.588276,15.2159757 15.1208328,14.8155552 Z"></path>/&gt;<path d="M12.5141394,4.00713998 L19.6431592,9.66631855 L12.5141394,15.3254903 L12.5141394,12.6090879 C12.1348756,12.5909785 5.52389001,12.1487935 0.929482229,16.2309578 C2.76810027,10.4750595 8.54278493,7.74509764 12.5141392,6.72354243 L12.5141394,4.00713998 Z" stroke="#000" stroke-width="1.67307692" fill-rule="nonzero"></path></g></mask></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-1009.000000, -362.000000)"><g transform="translate(1010.000000, 355.000000)"><rect x="0" y="0" width="30" height="30" fill="currentColor" mask="url(#svgm-0.7891038859204536)"></rect></g></g></g></svg>
       <p className = "textShare">Share Task</p>
      </div>     
      </div>
    );
  }
}

export default ShareTask;