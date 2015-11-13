import { exec } from 'child_process';
import path from 'path';

function updateBlog(req, res) {
  exec(path.join(_dirname, '../updateBlog.sh'), (error, stdout, stderr) => {
    if(stderr){ console.log(stderr) };
    if(stdout){ console.log('stdout:', stdout) };

    if(error !== null) {
      console.log('exec error:', error);
      res.send('Blog Error!');
      return
    }

    res.send('Blog Updated!');
  });
};

export default updateBlog;