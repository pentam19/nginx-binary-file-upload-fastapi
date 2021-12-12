"""
app main
"""

from fastapi import FastAPI
from typing import Optional
from fastapi import Header

app = FastAPI()


@app.get('/')
async def site_root():
    """root"""
    print('### site_root')
    return {"message": "Hello, WORLD!"}

@app.get('/test')
async def test():
    """root"""
    print('### test')
    return {"message": "Test!"}

@app.post("/upload")  
async def upload(x_file_path: Optional[str] = Header(None)):
    print('### upload')
    return {"x_file_path": x_file_path}