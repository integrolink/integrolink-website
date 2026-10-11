import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ width:"100%", height:"100%", display:"flex", alignItems:"center", justifyContent:"center", background:"linear-gradient(145deg,#2375FF,#154699)", borderRadius:96 }}>
      <div style={{ width:280, height:300, display:"flex", position:"relative" }}>
        <div style={{ position:"absolute", left:0, top:0, width:78, height:78, borderRadius:18, background:"#F8FAFC" }} />
        <div style={{ position:"absolute", left:102, top:0, width:78, height:238, borderRadius:18, background:"#F8FAFC" }} />
        <div style={{ position:"absolute", left:0, top:102, width:78, height:198, borderRadius:18, background:"#F8FAFC" }} />
        <div style={{ position:"absolute", left:102, bottom:0, width:178, height:62, borderRadius:18, background:"#F8FAFC" }} />
      </div>
    </div>,
    size,
  );
}
