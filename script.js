:root{
  --bg:#0b0f14; --panel:#0f1720; --muted:#9aa6b2; --accent:#7c5cff; --danger:#ff6b6b;
  --glass: rgba(255,255,255,0.03);
}
*{
  box-sizing:border-box;
  font-family:Inter,ui-sans-serif,system-ui,Segoe UI,Roboto,"Helvetica Neue",Arial
}
html,body{
  height:100%;
  margin:0;
  background:var(--bg);
  color:#e6eef6
}
.container{
  max-width:1100px;
  margin:18px auto;
  padding:18px
}
header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:12px;
  margin-bottom:16px
}
header h1{
  margin:0;
  font-size:20px
}
.controls{
  display:flex;
  gap:8px;
  align-items:center
}
.btn{
  background:transparent;
  border:1px solid rgba(255,255,255,0.06);
  padding:8px 12px;
  border-radius:10px;
  color:var(--muted);
  cursor:pointer
}
.btn.primary{
  background:linear-gradient(90deg,var(--accent),#5ad4ff);
  color:#061226;
  border:unset;
  font-weight:600
}
.toggle{
  display:flex;
  align-items:center;
  gap:6px
}
.grid{
  display:grid;
  grid-template-columns:1fr 360px;
  gap:16px
}
.panel{
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  padding:12px;
  border-radius:12px;
  border:1px solid rgba(255,255,255,0.03)
}
.list{
  display:flex;
  flex-direction:column;
  gap:12px;
  min-height:320px
}
.card{
  display:flex;
  justify-content:space-between;
  gap:12px;
  padding:12px;
  border-radius:10px;
  background:var(--glass);
  border:1px solid rgba(255,255,255,0.03)
}
.meta{
  max-width:62%
}
.name{
  font-weight:700
}
.small{
  color:var(--muted);
  font-size:13px
}
.progress{
  height:10px;
  background:rgba(255,255,255,0.03);
  border-radius:8px;
  margin-top:8px;
  overflow:hidden
}
.bar{
  height:100%;
  background:linear-gradient(90deg,var(--accent),#5ad4ff);
  width:0%
}
.amt{
  font-weight:700
}
.actions{
  display:flex;
  gap:8px
}
.icon{
  padding:8px;
  border-radius:8px;
  background:rgba(255,255,255,0.02);
  border:1px solid rgba(255,255,255,0.03);
  cursor:pointer
}
.addform{
  display:grid;
  gap:8px;
  grid-template-columns:1fr 1fr
}
.addform input, .addform select, textarea{
  padding:8px;
  border-radius:8px;
  border:1px solid rgba(255,255,255,0.04);
  background:transparent;
  color:inherit
}
.full{
  grid-column:1/-1
}
.ai-panel{
  display:flex;
  flex-direction:column;
  height:70vh
}
.ai-messages{
  flex:1;
  overflow:auto;
  padding:8px;
  border-radius:8px;
  border:1px solid rgba(255,255,255,0.02);
  background:rgba(0,0,0,0.06)
}
.msg{
  margin-bottom:10px
}
.msg.user{
  text-align:right
}
.msg .bubble{
  display:inline-block;
  padding:8px;
  border-radius:10px;
  max-width:80%
}
.msg.user .bubble{
  background:linear-gradient(90deg,var(--accent),#5ad4ff);
  color:#041021
}
.msg.bot .bubble{
  background:rgba(255,255,255,0.03)
}
.ai-input{
  display:flex;
  gap:8px;
  margin-top:8px
}
textarea#aiInput{
  min-height:60px;
  resize:vertical
}
.summary{
  display:flex;
  gap:12px;
  flex-wrap:wrap
}
.stat{
  background:rgba(255,255,255,0.02);
  padding:10px;
  border-radius:8px;
  min-width:110px;
  text-align:center
}
footer{
  margin-top:12px;
  text-align:center;
  color:var(--muted);
  font-size:13px
}
.running {
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:6px 10px;
  border-radius:999px;
  background:linear-gradient(90deg,#00c853,#7cffc2);
  color:#042018;
  font-weight:600
}
.running .dot{
  height:8px;
  width:8px;
  border-radius:50%;
  background:#fff;
  box-shadow:0 0 8px rgba(255,255,255,0.6);
  animation:beat 1s infinite
}
@keyframes beat {
  0%{transform:scale(1)}
  50%{transform:scale(1.25)}
  100%{transform:scale(1)}
}
@media(max-width:900px){
  .grid{grid-template-columns:1fr}
  .ai-panel{height:320px}
}
