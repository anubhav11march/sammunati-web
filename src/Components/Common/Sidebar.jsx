import React from 'react'
import '../../Assets/Css/sidebar.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ListIcon from '@mui/icons-material/List';
import ArticleIcon from '@mui/icons-material/Article';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PhoneIcon from '@mui/icons-material/Phone';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Sidebar() {
    
    const location = useLocation();
    
    // language support 
    
    console.log(location)



    return (
        <>
            <aside className="col-1 sidebar-wrapper mx-3">
                <div className="sidebar-content">
                    
                   {/* video buttons  */}

                    <nav className="sidebar-content-nav">
                        <Link to={'/home'} className={`sidebar-content-links ${location.pathname ==="/home" ? ("active-block"):(null)} `}>
                            <VideocamIcon className={`${location.pathname ==="/home" ? ("active-icon"):(null)}`}/>
                            <h6>Home</h6>
                        </Link>

                        <Link to={'/playlist'} className={`sidebar-content-links ${location.pathname ==="/playlist" ? ("active-block"):(null)} `}>
                            <SubscriptionsIcon />
                            <h6>Playlist</h6>
                        </Link>

                        <Link to={'/categories'} className={`sidebar-content-links ${location.pathname ==="/categories" ? ("active-block"):(null)} `}>
                            <ListIcon />
                            <h6>Categories</h6>
                        </Link>

                        <Link to={'/blogs'} className={`sidebar-content-links ${location.pathname ==="/blogs" ? ("active-block"):(null)} `}>
                            <ArticleIcon />
                            <h6>Blogs</h6>
                        </Link>
                    </nav>

                    {/* query buttons */}

                    <nav className='sidebar-content-help-nav'>
                        <Link to={'/query'} className={`sidebar-content-help-links ${location.pathname ==="/query" ? ("active-block"):(null)} `}>
                            <QuestionAnswerIcon />
                            <h6>Query</h6>
                        </Link>
                        <Link to={'/faq'} className={`sidebar-content-help-links ${location.pathname ==="/faq" ? ("active-block"):(null)} `}>
                            <ContactSupportIcon />
                            <h6>FAQ</h6>
                        </Link>
                        <Link to={'/contactus'} className={`sidebar-content-help-links ${location.pathname ==="/contactus" ? ("active-block"):(null)} `}>
                            <PhoneIcon />
                            <h6>Contact Us</h6>
                        </Link>
                    </nav>

                </div>
            </aside>
        </>
    )
}

export default Sidebar