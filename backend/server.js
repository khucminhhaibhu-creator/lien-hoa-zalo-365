import express from 'express';
import cors from 'cors';

const app=express();
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT||3000;
const ZALO_API_BASE=process.env.ZALO_API_BASE||'https://openapi.zalo.me';

app.get('/health',(req,res)=>res.json({ok:true,service:'lien-hoa-zalo-365',zaloConfigured:Boolean(process.env.ZALO_ACCESS_TOKEN)}));

// Adapter endpoint used by the GitHub Pages CRM.
// The exact Zalo GMF endpoint/permission must be supplied by the approved Zalo application.
app.get('/api/zalo/groups/:groupId/members',async(req,res)=>{
  const token=process.env.ZALO_ACCESS_TOKEN;
  if(!token)return res.status(503).json({error:'ZALO_ACCESS_TOKEN_NOT_CONFIGURED',members:[]});
  const path=process.env.ZALO_GROUP_MEMBERS_PATH;
  if(!path)return res.status(503).json({error:'ZALO_GROUP_MEMBERS_PATH_NOT_CONFIGURED',members:[]});
  const url=ZALO_API_BASE.replace(/\/$/,'')+path.replace(':groupId',encodeURIComponent(req.params.groupId));
  try{
    const r=await fetch(url,{headers:{Authorization:`Bearer ${token}`,Accept:'application/json'}});
    const text=await r.text();
    let body;try{body=JSON.parse(text)}catch{body={raw:text}}
    if(!r.ok)return res.status(r.status).json(body);
    return res.json(body);
  }catch(e){return res.status(502).json({error:'ZALO_API_REQUEST_FAILED',message:e.message,members:[]})}
});

app.listen(PORT,()=>console.log(`Liên Hoa Zalo 365 backend listening on ${PORT}`));
