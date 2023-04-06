import Link from 'next/link'
import {auth} from '../firebase'
export default function NavBar({user}) {
    
    return (
        <nav>
        <div className="nav-wrapper #fb8c00 purple darken-1">
          <Link href="/"><a className="brand-logo" style={{'fontFamily':'verdana'}}>Blogit</a></Link>
          <ul id="nav-mobile" className="right">
            {user?
            <>
              <li><Link href="/"><a className="btn red">View Blogs</a></Link></li>
              <li><Link href="/createblog"><a className="btn red">Create Blog</a></Link></li>
              <li> <button  className="btn black" onClick={()=>auth.signOut()}>Logout</button></li>
            </>
            
            :
                <>
                <li><Link href="/signup"><a>Signup</a></Link></li>
                <li><Link href="/login"><a>Login</a></Link></li>
                </>
            }
            
          </ul>
        </div>
      </nav>
    )
}
