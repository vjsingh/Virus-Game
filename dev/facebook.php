
    

  

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
  <head>
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>src/facebook.php at master from facebook's php-sdk - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    <link href="https://assets1.github.com/stylesheets/bundle_common.css?248fa7cbf2c203fd6cfa520c46540d5ede569831" media="screen" rel="stylesheet" type="text/css" />
<link href="https://assets1.github.com/stylesheets/bundle_github.css?248fa7cbf2c203fd6cfa520c46540d5ede569831" media="screen" rel="stylesheet" type="text/css" />

    <script type="text/javascript">
      if (typeof console == "undefined" || typeof console.log == "undefined")
        console = { log: function() {} }
    </script>
    <script type="text/javascript" charset="utf-8">
      var GitHub = {}
      var github_user = 'vjsingh'
      
    </script>
    <script src="https://assets3.github.com/javascripts/jquery/jquery-1.4.2.min.js?248fa7cbf2c203fd6cfa520c46540d5ede569831" type="text/javascript"></script>
    <script src="https://assets3.github.com/javascripts/bundle_common.js?248fa7cbf2c203fd6cfa520c46540d5ede569831" type="text/javascript"></script>
<script src="https://assets0.github.com/javascripts/bundle_github.js?248fa7cbf2c203fd6cfa520c46540d5ede569831" type="text/javascript"></script>


        <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "facebook/php-sdk"
      })
    </script>

    
  
    
  

  <link href="https://github.com/facebook/php-sdk/commits/master.atom" rel="alternate" title="Recent Commits to php-sdk:master" type="application/atom+xml" />

        <meta name="description" content="PHP SDK for the Facebook API" />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "facebook/php-sdk";
      GitHub.currentRef = 'master';
      GitHub.commitSHA = "2343fcaecbd1503770a4223d8aaf8283c1d14ce4";
      GitHub.currentPath = "src/facebook.php";
      GitHub.masterBranch = "master";

      
    </script>
  

            <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_trackPageview']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

  </head>

  

  <body class="logged_in ">
    

    
      <script type="text/javascript">
        var _kmq = _kmq || [];
        function _kms(u){
          var s = document.createElement('script'); var f = document.getElementsByTagName('script')[0]; s.type = 'text/javascript'; s.async = true;
          s.src = u; f.parentNode.insertBefore(s, f);
        }
        _kms('//i.kissmetrics.com/i.js');_kms('//doug1izaerwt3.cloudfront.net/406e8bf3a2b8846ead55afb3cfaf6664523e3a54.1.js');
      </script>
    

    

    

    

    

    <div class="subnavd" id="main">
      <div id="header" class="true">
        
          <a class="logo boring" href="https://github.com/">
            <img src="/images/modules/header/logov3.png?changed" class="default" alt="github" />
            <![if !IE]>
            <img src="/images/modules/header/logov3-hover.png" class="hover" alt="github" />
            <![endif]>
          </a>
        
        
          





  
    <div class="userbox">
      <div class="avatarname">
        <a href="https://github.com/vjsingh"><img src="https://secure.gravatar.com/avatar/4413e9624d53b6a5f6f5422d8af02934?s=140&d=https%3A%2F%2Fgithub.com%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="20" height="20"  /></a>
        <a href="https://github.com/vjsingh" class="name">vjsingh</a>

        
        
          <a href="/inbox/notifications" class="unread_count notifications_count new tooltipped downwards js-notification-count" title="Unread Notifications">84</a>
        
      </div>
      <ul class="usernav">
        <li><a href="https://github.com/">Dashboard</a></li>
        <li>
          
          <a href="https://github.com/inbox">Inbox</a>
          <a href="https://github.com/inbox" class="unread_count ">0</a>
        </li>
        <li><a href="https://github.com/account">Account Settings</a></li>
                        <li><a href="/logout">Log Out</a></li>
      </ul>
    </div><!-- /.userbox -->
  


        
        <div class="topsearch">
  
    <form action="/search" id="top_search_form" method="get">
      <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search">Advanced Search</a>
      <input type="search" class="search my_repos_autocompleter" name="q" results="5" placeholder="Search&hellip;" /> <input type="submit" value="Search" class="button" />
      <input type="hidden" name="type" value="Everything" />
      <input type="hidden" name="repo" value="" />
      <input type="hidden" name="langOverride" value="" />
      <input type="hidden" name="start_value" value="1" />
    </form>
    <ul class="nav">
      <li><a href="/explore">Explore GitHub</a></li>
      <li><a href="https://gist.github.com">Gist</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="http://help.github.com">Help</a></li>
    </ul>
  
</div>

      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public   ">

      

      <div class="title-actions-bar">
        <h1>
          <a href="/facebook">facebook</a> / <strong><a href="https://github.com/facebook/php-sdk">php-sdk</a></strong>
          
          
        </h1>

        
    <ul class="actions">
      

      
        <li class="for-owner" style="display:none"><a href="https://github.com/facebook/php-sdk/admin" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/facebook/php-sdk/toggle_watch" class="minibutton btn-watch " id="watch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '309fa714e2e00bbc72c6426f4b92a5ac5f9cc3ab'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/facebook/php-sdk/toggle_watch" class="minibutton btn-watch " id="unwatch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '309fa714e2e00bbc72c6426f4b92a5ac5f9cc3ab'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          
            <li class="for-notforked" style="display:none"><a href="/facebook/php-sdk/fork" class="minibutton btn-fork " id="fork_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '309fa714e2e00bbc72c6426f4b92a5ac5f9cc3ab'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Fork</span></a></li>
            <li class="for-hasfork" style="display:none"><a href="#" class="minibutton btn-fork " id="your_fork_button"><span><span class="icon"></span>Your Fork</span></a></li>
          

          <li id='pull_request_item' class='nspr' style='display:none'><a href="/facebook/php-sdk/pull/new/master" class="minibutton btn-pull-request "><span><span class="icon"></span>Pull Request</span></a></li>
        
      
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/facebook/php-sdk/watchers" title="Watchers" class="tooltipped downwards">1,282</a></li>
          <li class="forks"><a href="/facebook/php-sdk/network" title="Forks" class="tooltipped downwards">175</a></li>
        </ul>
      </li>
    </ul>

      </div>

        
  <ul class="tabs">
    <li><a href="https://github.com/facebook/php-sdk" class="selected" highlight="repo_source">Source</a></li>
    <li><a href="https://github.com/facebook/php-sdk/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/facebook/php-sdk/network" highlight="repo_network">Network</a></li>
    <li><a href="/facebook/php-sdk/pulls" highlight="repo_pulls">Pull Requests (3)</a></li>

    

    
      
      <li><a href="/facebook/php-sdk/issues" highlight="issues">Issues (40)</a></li>
    

                <li><a href="/facebook/php-sdk/wiki" highlight="repo_wiki">Wiki (10)</a></li>
        
    <li><a href="/facebook/php-sdk/graphs" highlight="repo_graphs">Graphs</a></li>

    <li class="contextswitch nochoices">
      <span class="toggle leftwards" >
        <em>Branch:</em>
        <code>master</code>
      </span>
    </li>
  </ul>

  <div style="display:none" id="pl-description"><p><em class="placeholder">click here to add a description</em></p></div>
  <div style="display:none" id="pl-homepage"><p><em class="placeholder">click here to add a homepage</em></p></div>

  <div class="subnav-bar">
  
  <ul>
    <li>
      <a href="#" class="dropdown">Switch Branches (1)</a>
      <ul>
        
          
            <li><strong>master &#x2713;</strong></li>
            
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown ">Switch Tags (10)</a>
              <ul>
                      
              <li><a href="/facebook/php-sdk/blob/v2.1.2/src/facebook.php">v2.1.2</a></li>
            
                      
              <li><a href="/facebook/php-sdk/blob/v2.1.1/src/facebook.php">v2.1.1</a></li>
            
                      
              <li><a href="/facebook/php-sdk/blob/v2.1.0/src/facebook.php">v2.1.0</a></li>
            
                      
              <li><a href="/facebook/php-sdk/blob/v2.0.7/src/facebook.php">v2.0.7</a></li>
            
                      
              <li><a href="/facebook/php-sdk/blob/v2.0.6/src/facebook.php">v2.0.6</a></li>
            
                      
              <li><a href="/facebook/php-sdk/blob/v2.0.4/src/facebook.php">v2.0.4</a></li>
            
                      
              <li><a href="/facebook/php-sdk/blob/v2.0.3/src/facebook.php">v2.0.3</a></li>
            
                      
              <li><a href="/facebook/php-sdk/blob/v2.0.2/src/facebook.php">v2.0.2</a></li>
            
                      
              <li><a href="/facebook/php-sdk/blob/v2.0.1/src/facebook.php">v2.0.1</a></li>
            
                      
              <li><a href="/facebook/php-sdk/blob/v2.0.0/src/facebook.php">v2.0.0</a></li>
            
                  </ul>
      
    </li>
    <li>
    
    <a href="/facebook/php-sdk/branches" class="manage">Branch List</a>
    
    </li>
  </ul>
</div>

  
  
  
  
  
  



        
    <div id="repo_details" class="metabox clearfix">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

        <a href="/facebook/php-sdk/downloads" class="download-source" id="download_button" title="Download source, tagged packages and binaries."><span class="icon"></span>Downloads</a>

      <div id="repository_desc_wrapper">
      <div id="repository_description" rel="repository_description_edit">
        
          <p>PHP SDK for the Facebook API
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>

      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/facebook/php-sdk/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="309fa714e2e00bbc72c6426f4b92a5ac5f9cc3ab" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="PHP SDK for the Facebook API">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      
      <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
        <p><a href="http://" rel="nofollow"></a></p>
      </div>

      <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
        <form action="/facebook/php-sdk/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="309fa714e2e00bbc72c6426f4b92a5ac5f9cc3ab" /></div>
          <input type="hidden" name="field" value="repository_homepage">
          <input type="text" class="textfield" name="value" value="">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>
      </div>
      <div class="rule "></div>
            <div id="url_box" class="url-box">
        <ul class="clone-urls">
          
            
            <li id="http_clone_url"><a href="https://github.com/facebook/php-sdk.git" data-permissions="Read-Only">HTTP</a></li>
            <li id="public_clone_url"><a href="git://github.com/facebook/php-sdk.git" data-permissions="Read-Only">Git Read-Only</a></li>
          
          
        </ul>
        <input type="text" spellcheck="false" id="url_field" class="url-field" />
              <span style="display:none" id="url_box_clippy"></span>
      <span id="clippy_tooltip_url_box_clippy" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://assets3.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=url_box_clippy&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://assets3.github.com/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=url_box_clippy&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

        <p id="url_description">This URL has <strong>Read+Write</strong> access</p>
      </div>
    </div>


        

      </div><!-- /.pagehead -->

      





<script type="text/javascript">
  GitHub.downloadRepo = '/facebook/php-sdk/archives/master'
  GitHub.revType = "master"

  GitHub.controllerName = "blob"
  GitHub.actionName     = "show"
  GitHub.currentAction  = "blob#show"

  
    GitHub.hasWriteAccess = false
    GitHub.hasAdminAccess = false
    GitHub.watchingRepo = false
    GitHub.ignoredRepo = false
    GitHub.hasForkOfRepo = ""
    GitHub.hasForked = false
  

  
</script>






<div class="flash-messages"></div>


  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/facebook/php-sdk/commit/2343fcaecbd1503770a4223d8aaf8283c1d14ce4">Change test app_id</a> <a href="/facebook/php-sdk/commit/2343fcaecbd1503770a4223d8aaf8283c1d14ce4#comments"><img alt="Comment" src="https://assets3.github.com/images/modules/dashboard/news/comment.png?fa9f6136a59a5559c54862c9d4cd1abc605c3480" /></a></pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img src="https://secure.gravatar.com/avatar/b3bb70a4bace7f9bd49f48b149ab95f9?s=140&d=https%3A%2F%2Fgithub.com%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="30" height="30"  />
        </div>
        <div class="name"><a href="/ptarjan">ptarjan</a> <span>(author)</span></div>
        <div class="date">
          <abbr class="relatize" title="2010-11-29 12:03:56">Mon Nov 29 12:03:56 -0800 2010</abbr>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/facebook/php-sdk/commit/2343fcaecbd1503770a4223d8aaf8283c1d14ce4" hotkey="c">2343fcaecbd1503770a4</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/facebook/php-sdk/tree/2343fcaecbd1503770a4223d8aaf8283c1d14ce4" hotkey="t">1149302bfeb849b32533</a><br />
      
        <span>p</span>arent&nbsp;
        
        <a href="/facebook/php-sdk/tree/1b3edf94e7e73f94f658c4058c6870d6b571820a" hotkey="p">1b3edf94e7e73f94f658</a>
      

    </div>
  </div>

    </div>
  </div>



  
    <div id="slider">

    

      <div class="breadcrumb" data-path="src/facebook.php/">
        <b><a href="/facebook/php-sdk/tree/2343fcaecbd1503770a4223d8aaf8283c1d14ce4">php-sdk</a></b> / <a href="/facebook/php-sdk/tree/2343fcaecbd1503770a4223d8aaf8283c1d14ce4/src">src</a> / facebook.php       <span style="display:none" id="clippy_3201">src/facebook.php</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://assets1.github.com/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_3201&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://assets1.github.com/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_3201&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

      </div>

      <div class="frames">
        <div class="frame frame-center" data-path="src/facebook.php/">
          
            <ul class="big-actions">
              <li><a class="file-edit-link minibutton" href="/facebook/php-sdk/file-edit/master/src/facebook.php"><span>Edit this file</span></a></li>
            </ul>
          

          <div id="files">
            <div class="file">
              <div class="meta">
                <div class="info">
                  <span class="icon"><img alt="Txt" height="16" src="https://assets3.github.com/images/icons/txt.png?fa9f6136a59a5559c54862c9d4cd1abc605c3480" width="16" /></span>
                  <span class="mode" title="File Mode">100644</span>
                  
                    <span>964 lines (875 sloc)</span>
                  
                  <span>26.573 kb</span>
                </div>
                <ul class="actions">
                  <li><a href="/facebook/php-sdk/raw/master/src/facebook.php" id="raw-url">raw</a></li>
                  
                    <li><a href="/facebook/php-sdk/blame/master/src/facebook.php">blame</a></li>
                  
                  <li><a href="/facebook/php-sdk/commits/master/src/facebook.php">history</a></li>
                </ul>
              </div>
              
  <div class="data type-php">
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <pre class="line_numbers"><span id="LID1" rel="#L1">1</span>
<span id="LID2" rel="#L2">2</span>
<span id="LID3" rel="#L3">3</span>
<span id="LID4" rel="#L4">4</span>
<span id="LID5" rel="#L5">5</span>
<span id="LID6" rel="#L6">6</span>
<span id="LID7" rel="#L7">7</span>
<span id="LID8" rel="#L8">8</span>
<span id="LID9" rel="#L9">9</span>
<span id="LID10" rel="#L10">10</span>
<span id="LID11" rel="#L11">11</span>
<span id="LID12" rel="#L12">12</span>
<span id="LID13" rel="#L13">13</span>
<span id="LID14" rel="#L14">14</span>
<span id="LID15" rel="#L15">15</span>
<span id="LID16" rel="#L16">16</span>
<span id="LID17" rel="#L17">17</span>
<span id="LID18" rel="#L18">18</span>
<span id="LID19" rel="#L19">19</span>
<span id="LID20" rel="#L20">20</span>
<span id="LID21" rel="#L21">21</span>
<span id="LID22" rel="#L22">22</span>
<span id="LID23" rel="#L23">23</span>
<span id="LID24" rel="#L24">24</span>
<span id="LID25" rel="#L25">25</span>
<span id="LID26" rel="#L26">26</span>
<span id="LID27" rel="#L27">27</span>
<span id="LID28" rel="#L28">28</span>
<span id="LID29" rel="#L29">29</span>
<span id="LID30" rel="#L30">30</span>
<span id="LID31" rel="#L31">31</span>
<span id="LID32" rel="#L32">32</span>
<span id="LID33" rel="#L33">33</span>
<span id="LID34" rel="#L34">34</span>
<span id="LID35" rel="#L35">35</span>
<span id="LID36" rel="#L36">36</span>
<span id="LID37" rel="#L37">37</span>
<span id="LID38" rel="#L38">38</span>
<span id="LID39" rel="#L39">39</span>
<span id="LID40" rel="#L40">40</span>
<span id="LID41" rel="#L41">41</span>
<span id="LID42" rel="#L42">42</span>
<span id="LID43" rel="#L43">43</span>
<span id="LID44" rel="#L44">44</span>
<span id="LID45" rel="#L45">45</span>
<span id="LID46" rel="#L46">46</span>
<span id="LID47" rel="#L47">47</span>
<span id="LID48" rel="#L48">48</span>
<span id="LID49" rel="#L49">49</span>
<span id="LID50" rel="#L50">50</span>
<span id="LID51" rel="#L51">51</span>
<span id="LID52" rel="#L52">52</span>
<span id="LID53" rel="#L53">53</span>
<span id="LID54" rel="#L54">54</span>
<span id="LID55" rel="#L55">55</span>
<span id="LID56" rel="#L56">56</span>
<span id="LID57" rel="#L57">57</span>
<span id="LID58" rel="#L58">58</span>
<span id="LID59" rel="#L59">59</span>
<span id="LID60" rel="#L60">60</span>
<span id="LID61" rel="#L61">61</span>
<span id="LID62" rel="#L62">62</span>
<span id="LID63" rel="#L63">63</span>
<span id="LID64" rel="#L64">64</span>
<span id="LID65" rel="#L65">65</span>
<span id="LID66" rel="#L66">66</span>
<span id="LID67" rel="#L67">67</span>
<span id="LID68" rel="#L68">68</span>
<span id="LID69" rel="#L69">69</span>
<span id="LID70" rel="#L70">70</span>
<span id="LID71" rel="#L71">71</span>
<span id="LID72" rel="#L72">72</span>
<span id="LID73" rel="#L73">73</span>
<span id="LID74" rel="#L74">74</span>
<span id="LID75" rel="#L75">75</span>
<span id="LID76" rel="#L76">76</span>
<span id="LID77" rel="#L77">77</span>
<span id="LID78" rel="#L78">78</span>
<span id="LID79" rel="#L79">79</span>
<span id="LID80" rel="#L80">80</span>
<span id="LID81" rel="#L81">81</span>
<span id="LID82" rel="#L82">82</span>
<span id="LID83" rel="#L83">83</span>
<span id="LID84" rel="#L84">84</span>
<span id="LID85" rel="#L85">85</span>
<span id="LID86" rel="#L86">86</span>
<span id="LID87" rel="#L87">87</span>
<span id="LID88" rel="#L88">88</span>
<span id="LID89" rel="#L89">89</span>
<span id="LID90" rel="#L90">90</span>
<span id="LID91" rel="#L91">91</span>
<span id="LID92" rel="#L92">92</span>
<span id="LID93" rel="#L93">93</span>
<span id="LID94" rel="#L94">94</span>
<span id="LID95" rel="#L95">95</span>
<span id="LID96" rel="#L96">96</span>
<span id="LID97" rel="#L97">97</span>
<span id="LID98" rel="#L98">98</span>
<span id="LID99" rel="#L99">99</span>
<span id="LID100" rel="#L100">100</span>
<span id="LID101" rel="#L101">101</span>
<span id="LID102" rel="#L102">102</span>
<span id="LID103" rel="#L103">103</span>
<span id="LID104" rel="#L104">104</span>
<span id="LID105" rel="#L105">105</span>
<span id="LID106" rel="#L106">106</span>
<span id="LID107" rel="#L107">107</span>
<span id="LID108" rel="#L108">108</span>
<span id="LID109" rel="#L109">109</span>
<span id="LID110" rel="#L110">110</span>
<span id="LID111" rel="#L111">111</span>
<span id="LID112" rel="#L112">112</span>
<span id="LID113" rel="#L113">113</span>
<span id="LID114" rel="#L114">114</span>
<span id="LID115" rel="#L115">115</span>
<span id="LID116" rel="#L116">116</span>
<span id="LID117" rel="#L117">117</span>
<span id="LID118" rel="#L118">118</span>
<span id="LID119" rel="#L119">119</span>
<span id="LID120" rel="#L120">120</span>
<span id="LID121" rel="#L121">121</span>
<span id="LID122" rel="#L122">122</span>
<span id="LID123" rel="#L123">123</span>
<span id="LID124" rel="#L124">124</span>
<span id="LID125" rel="#L125">125</span>
<span id="LID126" rel="#L126">126</span>
<span id="LID127" rel="#L127">127</span>
<span id="LID128" rel="#L128">128</span>
<span id="LID129" rel="#L129">129</span>
<span id="LID130" rel="#L130">130</span>
<span id="LID131" rel="#L131">131</span>
<span id="LID132" rel="#L132">132</span>
<span id="LID133" rel="#L133">133</span>
<span id="LID134" rel="#L134">134</span>
<span id="LID135" rel="#L135">135</span>
<span id="LID136" rel="#L136">136</span>
<span id="LID137" rel="#L137">137</span>
<span id="LID138" rel="#L138">138</span>
<span id="LID139" rel="#L139">139</span>
<span id="LID140" rel="#L140">140</span>
<span id="LID141" rel="#L141">141</span>
<span id="LID142" rel="#L142">142</span>
<span id="LID143" rel="#L143">143</span>
<span id="LID144" rel="#L144">144</span>
<span id="LID145" rel="#L145">145</span>
<span id="LID146" rel="#L146">146</span>
<span id="LID147" rel="#L147">147</span>
<span id="LID148" rel="#L148">148</span>
<span id="LID149" rel="#L149">149</span>
<span id="LID150" rel="#L150">150</span>
<span id="LID151" rel="#L151">151</span>
<span id="LID152" rel="#L152">152</span>
<span id="LID153" rel="#L153">153</span>
<span id="LID154" rel="#L154">154</span>
<span id="LID155" rel="#L155">155</span>
<span id="LID156" rel="#L156">156</span>
<span id="LID157" rel="#L157">157</span>
<span id="LID158" rel="#L158">158</span>
<span id="LID159" rel="#L159">159</span>
<span id="LID160" rel="#L160">160</span>
<span id="LID161" rel="#L161">161</span>
<span id="LID162" rel="#L162">162</span>
<span id="LID163" rel="#L163">163</span>
<span id="LID164" rel="#L164">164</span>
<span id="LID165" rel="#L165">165</span>
<span id="LID166" rel="#L166">166</span>
<span id="LID167" rel="#L167">167</span>
<span id="LID168" rel="#L168">168</span>
<span id="LID169" rel="#L169">169</span>
<span id="LID170" rel="#L170">170</span>
<span id="LID171" rel="#L171">171</span>
<span id="LID172" rel="#L172">172</span>
<span id="LID173" rel="#L173">173</span>
<span id="LID174" rel="#L174">174</span>
<span id="LID175" rel="#L175">175</span>
<span id="LID176" rel="#L176">176</span>
<span id="LID177" rel="#L177">177</span>
<span id="LID178" rel="#L178">178</span>
<span id="LID179" rel="#L179">179</span>
<span id="LID180" rel="#L180">180</span>
<span id="LID181" rel="#L181">181</span>
<span id="LID182" rel="#L182">182</span>
<span id="LID183" rel="#L183">183</span>
<span id="LID184" rel="#L184">184</span>
<span id="LID185" rel="#L185">185</span>
<span id="LID186" rel="#L186">186</span>
<span id="LID187" rel="#L187">187</span>
<span id="LID188" rel="#L188">188</span>
<span id="LID189" rel="#L189">189</span>
<span id="LID190" rel="#L190">190</span>
<span id="LID191" rel="#L191">191</span>
<span id="LID192" rel="#L192">192</span>
<span id="LID193" rel="#L193">193</span>
<span id="LID194" rel="#L194">194</span>
<span id="LID195" rel="#L195">195</span>
<span id="LID196" rel="#L196">196</span>
<span id="LID197" rel="#L197">197</span>
<span id="LID198" rel="#L198">198</span>
<span id="LID199" rel="#L199">199</span>
<span id="LID200" rel="#L200">200</span>
<span id="LID201" rel="#L201">201</span>
<span id="LID202" rel="#L202">202</span>
<span id="LID203" rel="#L203">203</span>
<span id="LID204" rel="#L204">204</span>
<span id="LID205" rel="#L205">205</span>
<span id="LID206" rel="#L206">206</span>
<span id="LID207" rel="#L207">207</span>
<span id="LID208" rel="#L208">208</span>
<span id="LID209" rel="#L209">209</span>
<span id="LID210" rel="#L210">210</span>
<span id="LID211" rel="#L211">211</span>
<span id="LID212" rel="#L212">212</span>
<span id="LID213" rel="#L213">213</span>
<span id="LID214" rel="#L214">214</span>
<span id="LID215" rel="#L215">215</span>
<span id="LID216" rel="#L216">216</span>
<span id="LID217" rel="#L217">217</span>
<span id="LID218" rel="#L218">218</span>
<span id="LID219" rel="#L219">219</span>
<span id="LID220" rel="#L220">220</span>
<span id="LID221" rel="#L221">221</span>
<span id="LID222" rel="#L222">222</span>
<span id="LID223" rel="#L223">223</span>
<span id="LID224" rel="#L224">224</span>
<span id="LID225" rel="#L225">225</span>
<span id="LID226" rel="#L226">226</span>
<span id="LID227" rel="#L227">227</span>
<span id="LID228" rel="#L228">228</span>
<span id="LID229" rel="#L229">229</span>
<span id="LID230" rel="#L230">230</span>
<span id="LID231" rel="#L231">231</span>
<span id="LID232" rel="#L232">232</span>
<span id="LID233" rel="#L233">233</span>
<span id="LID234" rel="#L234">234</span>
<span id="LID235" rel="#L235">235</span>
<span id="LID236" rel="#L236">236</span>
<span id="LID237" rel="#L237">237</span>
<span id="LID238" rel="#L238">238</span>
<span id="LID239" rel="#L239">239</span>
<span id="LID240" rel="#L240">240</span>
<span id="LID241" rel="#L241">241</span>
<span id="LID242" rel="#L242">242</span>
<span id="LID243" rel="#L243">243</span>
<span id="LID244" rel="#L244">244</span>
<span id="LID245" rel="#L245">245</span>
<span id="LID246" rel="#L246">246</span>
<span id="LID247" rel="#L247">247</span>
<span id="LID248" rel="#L248">248</span>
<span id="LID249" rel="#L249">249</span>
<span id="LID250" rel="#L250">250</span>
<span id="LID251" rel="#L251">251</span>
<span id="LID252" rel="#L252">252</span>
<span id="LID253" rel="#L253">253</span>
<span id="LID254" rel="#L254">254</span>
<span id="LID255" rel="#L255">255</span>
<span id="LID256" rel="#L256">256</span>
<span id="LID257" rel="#L257">257</span>
<span id="LID258" rel="#L258">258</span>
<span id="LID259" rel="#L259">259</span>
<span id="LID260" rel="#L260">260</span>
<span id="LID261" rel="#L261">261</span>
<span id="LID262" rel="#L262">262</span>
<span id="LID263" rel="#L263">263</span>
<span id="LID264" rel="#L264">264</span>
<span id="LID265" rel="#L265">265</span>
<span id="LID266" rel="#L266">266</span>
<span id="LID267" rel="#L267">267</span>
<span id="LID268" rel="#L268">268</span>
<span id="LID269" rel="#L269">269</span>
<span id="LID270" rel="#L270">270</span>
<span id="LID271" rel="#L271">271</span>
<span id="LID272" rel="#L272">272</span>
<span id="LID273" rel="#L273">273</span>
<span id="LID274" rel="#L274">274</span>
<span id="LID275" rel="#L275">275</span>
<span id="LID276" rel="#L276">276</span>
<span id="LID277" rel="#L277">277</span>
<span id="LID278" rel="#L278">278</span>
<span id="LID279" rel="#L279">279</span>
<span id="LID280" rel="#L280">280</span>
<span id="LID281" rel="#L281">281</span>
<span id="LID282" rel="#L282">282</span>
<span id="LID283" rel="#L283">283</span>
<span id="LID284" rel="#L284">284</span>
<span id="LID285" rel="#L285">285</span>
<span id="LID286" rel="#L286">286</span>
<span id="LID287" rel="#L287">287</span>
<span id="LID288" rel="#L288">288</span>
<span id="LID289" rel="#L289">289</span>
<span id="LID290" rel="#L290">290</span>
<span id="LID291" rel="#L291">291</span>
<span id="LID292" rel="#L292">292</span>
<span id="LID293" rel="#L293">293</span>
<span id="LID294" rel="#L294">294</span>
<span id="LID295" rel="#L295">295</span>
<span id="LID296" rel="#L296">296</span>
<span id="LID297" rel="#L297">297</span>
<span id="LID298" rel="#L298">298</span>
<span id="LID299" rel="#L299">299</span>
<span id="LID300" rel="#L300">300</span>
<span id="LID301" rel="#L301">301</span>
<span id="LID302" rel="#L302">302</span>
<span id="LID303" rel="#L303">303</span>
<span id="LID304" rel="#L304">304</span>
<span id="LID305" rel="#L305">305</span>
<span id="LID306" rel="#L306">306</span>
<span id="LID307" rel="#L307">307</span>
<span id="LID308" rel="#L308">308</span>
<span id="LID309" rel="#L309">309</span>
<span id="LID310" rel="#L310">310</span>
<span id="LID311" rel="#L311">311</span>
<span id="LID312" rel="#L312">312</span>
<span id="LID313" rel="#L313">313</span>
<span id="LID314" rel="#L314">314</span>
<span id="LID315" rel="#L315">315</span>
<span id="LID316" rel="#L316">316</span>
<span id="LID317" rel="#L317">317</span>
<span id="LID318" rel="#L318">318</span>
<span id="LID319" rel="#L319">319</span>
<span id="LID320" rel="#L320">320</span>
<span id="LID321" rel="#L321">321</span>
<span id="LID322" rel="#L322">322</span>
<span id="LID323" rel="#L323">323</span>
<span id="LID324" rel="#L324">324</span>
<span id="LID325" rel="#L325">325</span>
<span id="LID326" rel="#L326">326</span>
<span id="LID327" rel="#L327">327</span>
<span id="LID328" rel="#L328">328</span>
<span id="LID329" rel="#L329">329</span>
<span id="LID330" rel="#L330">330</span>
<span id="LID331" rel="#L331">331</span>
<span id="LID332" rel="#L332">332</span>
<span id="LID333" rel="#L333">333</span>
<span id="LID334" rel="#L334">334</span>
<span id="LID335" rel="#L335">335</span>
<span id="LID336" rel="#L336">336</span>
<span id="LID337" rel="#L337">337</span>
<span id="LID338" rel="#L338">338</span>
<span id="LID339" rel="#L339">339</span>
<span id="LID340" rel="#L340">340</span>
<span id="LID341" rel="#L341">341</span>
<span id="LID342" rel="#L342">342</span>
<span id="LID343" rel="#L343">343</span>
<span id="LID344" rel="#L344">344</span>
<span id="LID345" rel="#L345">345</span>
<span id="LID346" rel="#L346">346</span>
<span id="LID347" rel="#L347">347</span>
<span id="LID348" rel="#L348">348</span>
<span id="LID349" rel="#L349">349</span>
<span id="LID350" rel="#L350">350</span>
<span id="LID351" rel="#L351">351</span>
<span id="LID352" rel="#L352">352</span>
<span id="LID353" rel="#L353">353</span>
<span id="LID354" rel="#L354">354</span>
<span id="LID355" rel="#L355">355</span>
<span id="LID356" rel="#L356">356</span>
<span id="LID357" rel="#L357">357</span>
<span id="LID358" rel="#L358">358</span>
<span id="LID359" rel="#L359">359</span>
<span id="LID360" rel="#L360">360</span>
<span id="LID361" rel="#L361">361</span>
<span id="LID362" rel="#L362">362</span>
<span id="LID363" rel="#L363">363</span>
<span id="LID364" rel="#L364">364</span>
<span id="LID365" rel="#L365">365</span>
<span id="LID366" rel="#L366">366</span>
<span id="LID367" rel="#L367">367</span>
<span id="LID368" rel="#L368">368</span>
<span id="LID369" rel="#L369">369</span>
<span id="LID370" rel="#L370">370</span>
<span id="LID371" rel="#L371">371</span>
<span id="LID372" rel="#L372">372</span>
<span id="LID373" rel="#L373">373</span>
<span id="LID374" rel="#L374">374</span>
<span id="LID375" rel="#L375">375</span>
<span id="LID376" rel="#L376">376</span>
<span id="LID377" rel="#L377">377</span>
<span id="LID378" rel="#L378">378</span>
<span id="LID379" rel="#L379">379</span>
<span id="LID380" rel="#L380">380</span>
<span id="LID381" rel="#L381">381</span>
<span id="LID382" rel="#L382">382</span>
<span id="LID383" rel="#L383">383</span>
<span id="LID384" rel="#L384">384</span>
<span id="LID385" rel="#L385">385</span>
<span id="LID386" rel="#L386">386</span>
<span id="LID387" rel="#L387">387</span>
<span id="LID388" rel="#L388">388</span>
<span id="LID389" rel="#L389">389</span>
<span id="LID390" rel="#L390">390</span>
<span id="LID391" rel="#L391">391</span>
<span id="LID392" rel="#L392">392</span>
<span id="LID393" rel="#L393">393</span>
<span id="LID394" rel="#L394">394</span>
<span id="LID395" rel="#L395">395</span>
<span id="LID396" rel="#L396">396</span>
<span id="LID397" rel="#L397">397</span>
<span id="LID398" rel="#L398">398</span>
<span id="LID399" rel="#L399">399</span>
<span id="LID400" rel="#L400">400</span>
<span id="LID401" rel="#L401">401</span>
<span id="LID402" rel="#L402">402</span>
<span id="LID403" rel="#L403">403</span>
<span id="LID404" rel="#L404">404</span>
<span id="LID405" rel="#L405">405</span>
<span id="LID406" rel="#L406">406</span>
<span id="LID407" rel="#L407">407</span>
<span id="LID408" rel="#L408">408</span>
<span id="LID409" rel="#L409">409</span>
<span id="LID410" rel="#L410">410</span>
<span id="LID411" rel="#L411">411</span>
<span id="LID412" rel="#L412">412</span>
<span id="LID413" rel="#L413">413</span>
<span id="LID414" rel="#L414">414</span>
<span id="LID415" rel="#L415">415</span>
<span id="LID416" rel="#L416">416</span>
<span id="LID417" rel="#L417">417</span>
<span id="LID418" rel="#L418">418</span>
<span id="LID419" rel="#L419">419</span>
<span id="LID420" rel="#L420">420</span>
<span id="LID421" rel="#L421">421</span>
<span id="LID422" rel="#L422">422</span>
<span id="LID423" rel="#L423">423</span>
<span id="LID424" rel="#L424">424</span>
<span id="LID425" rel="#L425">425</span>
<span id="LID426" rel="#L426">426</span>
<span id="LID427" rel="#L427">427</span>
<span id="LID428" rel="#L428">428</span>
<span id="LID429" rel="#L429">429</span>
<span id="LID430" rel="#L430">430</span>
<span id="LID431" rel="#L431">431</span>
<span id="LID432" rel="#L432">432</span>
<span id="LID433" rel="#L433">433</span>
<span id="LID434" rel="#L434">434</span>
<span id="LID435" rel="#L435">435</span>
<span id="LID436" rel="#L436">436</span>
<span id="LID437" rel="#L437">437</span>
<span id="LID438" rel="#L438">438</span>
<span id="LID439" rel="#L439">439</span>
<span id="LID440" rel="#L440">440</span>
<span id="LID441" rel="#L441">441</span>
<span id="LID442" rel="#L442">442</span>
<span id="LID443" rel="#L443">443</span>
<span id="LID444" rel="#L444">444</span>
<span id="LID445" rel="#L445">445</span>
<span id="LID446" rel="#L446">446</span>
<span id="LID447" rel="#L447">447</span>
<span id="LID448" rel="#L448">448</span>
<span id="LID449" rel="#L449">449</span>
<span id="LID450" rel="#L450">450</span>
<span id="LID451" rel="#L451">451</span>
<span id="LID452" rel="#L452">452</span>
<span id="LID453" rel="#L453">453</span>
<span id="LID454" rel="#L454">454</span>
<span id="LID455" rel="#L455">455</span>
<span id="LID456" rel="#L456">456</span>
<span id="LID457" rel="#L457">457</span>
<span id="LID458" rel="#L458">458</span>
<span id="LID459" rel="#L459">459</span>
<span id="LID460" rel="#L460">460</span>
<span id="LID461" rel="#L461">461</span>
<span id="LID462" rel="#L462">462</span>
<span id="LID463" rel="#L463">463</span>
<span id="LID464" rel="#L464">464</span>
<span id="LID465" rel="#L465">465</span>
<span id="LID466" rel="#L466">466</span>
<span id="LID467" rel="#L467">467</span>
<span id="LID468" rel="#L468">468</span>
<span id="LID469" rel="#L469">469</span>
<span id="LID470" rel="#L470">470</span>
<span id="LID471" rel="#L471">471</span>
<span id="LID472" rel="#L472">472</span>
<span id="LID473" rel="#L473">473</span>
<span id="LID474" rel="#L474">474</span>
<span id="LID475" rel="#L475">475</span>
<span id="LID476" rel="#L476">476</span>
<span id="LID477" rel="#L477">477</span>
<span id="LID478" rel="#L478">478</span>
<span id="LID479" rel="#L479">479</span>
<span id="LID480" rel="#L480">480</span>
<span id="LID481" rel="#L481">481</span>
<span id="LID482" rel="#L482">482</span>
<span id="LID483" rel="#L483">483</span>
<span id="LID484" rel="#L484">484</span>
<span id="LID485" rel="#L485">485</span>
<span id="LID486" rel="#L486">486</span>
<span id="LID487" rel="#L487">487</span>
<span id="LID488" rel="#L488">488</span>
<span id="LID489" rel="#L489">489</span>
<span id="LID490" rel="#L490">490</span>
<span id="LID491" rel="#L491">491</span>
<span id="LID492" rel="#L492">492</span>
<span id="LID493" rel="#L493">493</span>
<span id="LID494" rel="#L494">494</span>
<span id="LID495" rel="#L495">495</span>
<span id="LID496" rel="#L496">496</span>
<span id="LID497" rel="#L497">497</span>
<span id="LID498" rel="#L498">498</span>
<span id="LID499" rel="#L499">499</span>
<span id="LID500" rel="#L500">500</span>
<span id="LID501" rel="#L501">501</span>
<span id="LID502" rel="#L502">502</span>
<span id="LID503" rel="#L503">503</span>
<span id="LID504" rel="#L504">504</span>
<span id="LID505" rel="#L505">505</span>
<span id="LID506" rel="#L506">506</span>
<span id="LID507" rel="#L507">507</span>
<span id="LID508" rel="#L508">508</span>
<span id="LID509" rel="#L509">509</span>
<span id="LID510" rel="#L510">510</span>
<span id="LID511" rel="#L511">511</span>
<span id="LID512" rel="#L512">512</span>
<span id="LID513" rel="#L513">513</span>
<span id="LID514" rel="#L514">514</span>
<span id="LID515" rel="#L515">515</span>
<span id="LID516" rel="#L516">516</span>
<span id="LID517" rel="#L517">517</span>
<span id="LID518" rel="#L518">518</span>
<span id="LID519" rel="#L519">519</span>
<span id="LID520" rel="#L520">520</span>
<span id="LID521" rel="#L521">521</span>
<span id="LID522" rel="#L522">522</span>
<span id="LID523" rel="#L523">523</span>
<span id="LID524" rel="#L524">524</span>
<span id="LID525" rel="#L525">525</span>
<span id="LID526" rel="#L526">526</span>
<span id="LID527" rel="#L527">527</span>
<span id="LID528" rel="#L528">528</span>
<span id="LID529" rel="#L529">529</span>
<span id="LID530" rel="#L530">530</span>
<span id="LID531" rel="#L531">531</span>
<span id="LID532" rel="#L532">532</span>
<span id="LID533" rel="#L533">533</span>
<span id="LID534" rel="#L534">534</span>
<span id="LID535" rel="#L535">535</span>
<span id="LID536" rel="#L536">536</span>
<span id="LID537" rel="#L537">537</span>
<span id="LID538" rel="#L538">538</span>
<span id="LID539" rel="#L539">539</span>
<span id="LID540" rel="#L540">540</span>
<span id="LID541" rel="#L541">541</span>
<span id="LID542" rel="#L542">542</span>
<span id="LID543" rel="#L543">543</span>
<span id="LID544" rel="#L544">544</span>
<span id="LID545" rel="#L545">545</span>
<span id="LID546" rel="#L546">546</span>
<span id="LID547" rel="#L547">547</span>
<span id="LID548" rel="#L548">548</span>
<span id="LID549" rel="#L549">549</span>
<span id="LID550" rel="#L550">550</span>
<span id="LID551" rel="#L551">551</span>
<span id="LID552" rel="#L552">552</span>
<span id="LID553" rel="#L553">553</span>
<span id="LID554" rel="#L554">554</span>
<span id="LID555" rel="#L555">555</span>
<span id="LID556" rel="#L556">556</span>
<span id="LID557" rel="#L557">557</span>
<span id="LID558" rel="#L558">558</span>
<span id="LID559" rel="#L559">559</span>
<span id="LID560" rel="#L560">560</span>
<span id="LID561" rel="#L561">561</span>
<span id="LID562" rel="#L562">562</span>
<span id="LID563" rel="#L563">563</span>
<span id="LID564" rel="#L564">564</span>
<span id="LID565" rel="#L565">565</span>
<span id="LID566" rel="#L566">566</span>
<span id="LID567" rel="#L567">567</span>
<span id="LID568" rel="#L568">568</span>
<span id="LID569" rel="#L569">569</span>
<span id="LID570" rel="#L570">570</span>
<span id="LID571" rel="#L571">571</span>
<span id="LID572" rel="#L572">572</span>
<span id="LID573" rel="#L573">573</span>
<span id="LID574" rel="#L574">574</span>
<span id="LID575" rel="#L575">575</span>
<span id="LID576" rel="#L576">576</span>
<span id="LID577" rel="#L577">577</span>
<span id="LID578" rel="#L578">578</span>
<span id="LID579" rel="#L579">579</span>
<span id="LID580" rel="#L580">580</span>
<span id="LID581" rel="#L581">581</span>
<span id="LID582" rel="#L582">582</span>
<span id="LID583" rel="#L583">583</span>
<span id="LID584" rel="#L584">584</span>
<span id="LID585" rel="#L585">585</span>
<span id="LID586" rel="#L586">586</span>
<span id="LID587" rel="#L587">587</span>
<span id="LID588" rel="#L588">588</span>
<span id="LID589" rel="#L589">589</span>
<span id="LID590" rel="#L590">590</span>
<span id="LID591" rel="#L591">591</span>
<span id="LID592" rel="#L592">592</span>
<span id="LID593" rel="#L593">593</span>
<span id="LID594" rel="#L594">594</span>
<span id="LID595" rel="#L595">595</span>
<span id="LID596" rel="#L596">596</span>
<span id="LID597" rel="#L597">597</span>
<span id="LID598" rel="#L598">598</span>
<span id="LID599" rel="#L599">599</span>
<span id="LID600" rel="#L600">600</span>
<span id="LID601" rel="#L601">601</span>
<span id="LID602" rel="#L602">602</span>
<span id="LID603" rel="#L603">603</span>
<span id="LID604" rel="#L604">604</span>
<span id="LID605" rel="#L605">605</span>
<span id="LID606" rel="#L606">606</span>
<span id="LID607" rel="#L607">607</span>
<span id="LID608" rel="#L608">608</span>
<span id="LID609" rel="#L609">609</span>
<span id="LID610" rel="#L610">610</span>
<span id="LID611" rel="#L611">611</span>
<span id="LID612" rel="#L612">612</span>
<span id="LID613" rel="#L613">613</span>
<span id="LID614" rel="#L614">614</span>
<span id="LID615" rel="#L615">615</span>
<span id="LID616" rel="#L616">616</span>
<span id="LID617" rel="#L617">617</span>
<span id="LID618" rel="#L618">618</span>
<span id="LID619" rel="#L619">619</span>
<span id="LID620" rel="#L620">620</span>
<span id="LID621" rel="#L621">621</span>
<span id="LID622" rel="#L622">622</span>
<span id="LID623" rel="#L623">623</span>
<span id="LID624" rel="#L624">624</span>
<span id="LID625" rel="#L625">625</span>
<span id="LID626" rel="#L626">626</span>
<span id="LID627" rel="#L627">627</span>
<span id="LID628" rel="#L628">628</span>
<span id="LID629" rel="#L629">629</span>
<span id="LID630" rel="#L630">630</span>
<span id="LID631" rel="#L631">631</span>
<span id="LID632" rel="#L632">632</span>
<span id="LID633" rel="#L633">633</span>
<span id="LID634" rel="#L634">634</span>
<span id="LID635" rel="#L635">635</span>
<span id="LID636" rel="#L636">636</span>
<span id="LID637" rel="#L637">637</span>
<span id="LID638" rel="#L638">638</span>
<span id="LID639" rel="#L639">639</span>
<span id="LID640" rel="#L640">640</span>
<span id="LID641" rel="#L641">641</span>
<span id="LID642" rel="#L642">642</span>
<span id="LID643" rel="#L643">643</span>
<span id="LID644" rel="#L644">644</span>
<span id="LID645" rel="#L645">645</span>
<span id="LID646" rel="#L646">646</span>
<span id="LID647" rel="#L647">647</span>
<span id="LID648" rel="#L648">648</span>
<span id="LID649" rel="#L649">649</span>
<span id="LID650" rel="#L650">650</span>
<span id="LID651" rel="#L651">651</span>
<span id="LID652" rel="#L652">652</span>
<span id="LID653" rel="#L653">653</span>
<span id="LID654" rel="#L654">654</span>
<span id="LID655" rel="#L655">655</span>
<span id="LID656" rel="#L656">656</span>
<span id="LID657" rel="#L657">657</span>
<span id="LID658" rel="#L658">658</span>
<span id="LID659" rel="#L659">659</span>
<span id="LID660" rel="#L660">660</span>
<span id="LID661" rel="#L661">661</span>
<span id="LID662" rel="#L662">662</span>
<span id="LID663" rel="#L663">663</span>
<span id="LID664" rel="#L664">664</span>
<span id="LID665" rel="#L665">665</span>
<span id="LID666" rel="#L666">666</span>
<span id="LID667" rel="#L667">667</span>
<span id="LID668" rel="#L668">668</span>
<span id="LID669" rel="#L669">669</span>
<span id="LID670" rel="#L670">670</span>
<span id="LID671" rel="#L671">671</span>
<span id="LID672" rel="#L672">672</span>
<span id="LID673" rel="#L673">673</span>
<span id="LID674" rel="#L674">674</span>
<span id="LID675" rel="#L675">675</span>
<span id="LID676" rel="#L676">676</span>
<span id="LID677" rel="#L677">677</span>
<span id="LID678" rel="#L678">678</span>
<span id="LID679" rel="#L679">679</span>
<span id="LID680" rel="#L680">680</span>
<span id="LID681" rel="#L681">681</span>
<span id="LID682" rel="#L682">682</span>
<span id="LID683" rel="#L683">683</span>
<span id="LID684" rel="#L684">684</span>
<span id="LID685" rel="#L685">685</span>
<span id="LID686" rel="#L686">686</span>
<span id="LID687" rel="#L687">687</span>
<span id="LID688" rel="#L688">688</span>
<span id="LID689" rel="#L689">689</span>
<span id="LID690" rel="#L690">690</span>
<span id="LID691" rel="#L691">691</span>
<span id="LID692" rel="#L692">692</span>
<span id="LID693" rel="#L693">693</span>
<span id="LID694" rel="#L694">694</span>
<span id="LID695" rel="#L695">695</span>
<span id="LID696" rel="#L696">696</span>
<span id="LID697" rel="#L697">697</span>
<span id="LID698" rel="#L698">698</span>
<span id="LID699" rel="#L699">699</span>
<span id="LID700" rel="#L700">700</span>
<span id="LID701" rel="#L701">701</span>
<span id="LID702" rel="#L702">702</span>
<span id="LID703" rel="#L703">703</span>
<span id="LID704" rel="#L704">704</span>
<span id="LID705" rel="#L705">705</span>
<span id="LID706" rel="#L706">706</span>
<span id="LID707" rel="#L707">707</span>
<span id="LID708" rel="#L708">708</span>
<span id="LID709" rel="#L709">709</span>
<span id="LID710" rel="#L710">710</span>
<span id="LID711" rel="#L711">711</span>
<span id="LID712" rel="#L712">712</span>
<span id="LID713" rel="#L713">713</span>
<span id="LID714" rel="#L714">714</span>
<span id="LID715" rel="#L715">715</span>
<span id="LID716" rel="#L716">716</span>
<span id="LID717" rel="#L717">717</span>
<span id="LID718" rel="#L718">718</span>
<span id="LID719" rel="#L719">719</span>
<span id="LID720" rel="#L720">720</span>
<span id="LID721" rel="#L721">721</span>
<span id="LID722" rel="#L722">722</span>
<span id="LID723" rel="#L723">723</span>
<span id="LID724" rel="#L724">724</span>
<span id="LID725" rel="#L725">725</span>
<span id="LID726" rel="#L726">726</span>
<span id="LID727" rel="#L727">727</span>
<span id="LID728" rel="#L728">728</span>
<span id="LID729" rel="#L729">729</span>
<span id="LID730" rel="#L730">730</span>
<span id="LID731" rel="#L731">731</span>
<span id="LID732" rel="#L732">732</span>
<span id="LID733" rel="#L733">733</span>
<span id="LID734" rel="#L734">734</span>
<span id="LID735" rel="#L735">735</span>
<span id="LID736" rel="#L736">736</span>
<span id="LID737" rel="#L737">737</span>
<span id="LID738" rel="#L738">738</span>
<span id="LID739" rel="#L739">739</span>
<span id="LID740" rel="#L740">740</span>
<span id="LID741" rel="#L741">741</span>
<span id="LID742" rel="#L742">742</span>
<span id="LID743" rel="#L743">743</span>
<span id="LID744" rel="#L744">744</span>
<span id="LID745" rel="#L745">745</span>
<span id="LID746" rel="#L746">746</span>
<span id="LID747" rel="#L747">747</span>
<span id="LID748" rel="#L748">748</span>
<span id="LID749" rel="#L749">749</span>
<span id="LID750" rel="#L750">750</span>
<span id="LID751" rel="#L751">751</span>
<span id="LID752" rel="#L752">752</span>
<span id="LID753" rel="#L753">753</span>
<span id="LID754" rel="#L754">754</span>
<span id="LID755" rel="#L755">755</span>
<span id="LID756" rel="#L756">756</span>
<span id="LID757" rel="#L757">757</span>
<span id="LID758" rel="#L758">758</span>
<span id="LID759" rel="#L759">759</span>
<span id="LID760" rel="#L760">760</span>
<span id="LID761" rel="#L761">761</span>
<span id="LID762" rel="#L762">762</span>
<span id="LID763" rel="#L763">763</span>
<span id="LID764" rel="#L764">764</span>
<span id="LID765" rel="#L765">765</span>
<span id="LID766" rel="#L766">766</span>
<span id="LID767" rel="#L767">767</span>
<span id="LID768" rel="#L768">768</span>
<span id="LID769" rel="#L769">769</span>
<span id="LID770" rel="#L770">770</span>
<span id="LID771" rel="#L771">771</span>
<span id="LID772" rel="#L772">772</span>
<span id="LID773" rel="#L773">773</span>
<span id="LID774" rel="#L774">774</span>
<span id="LID775" rel="#L775">775</span>
<span id="LID776" rel="#L776">776</span>
<span id="LID777" rel="#L777">777</span>
<span id="LID778" rel="#L778">778</span>
<span id="LID779" rel="#L779">779</span>
<span id="LID780" rel="#L780">780</span>
<span id="LID781" rel="#L781">781</span>
<span id="LID782" rel="#L782">782</span>
<span id="LID783" rel="#L783">783</span>
<span id="LID784" rel="#L784">784</span>
<span id="LID785" rel="#L785">785</span>
<span id="LID786" rel="#L786">786</span>
<span id="LID787" rel="#L787">787</span>
<span id="LID788" rel="#L788">788</span>
<span id="LID789" rel="#L789">789</span>
<span id="LID790" rel="#L790">790</span>
<span id="LID791" rel="#L791">791</span>
<span id="LID792" rel="#L792">792</span>
<span id="LID793" rel="#L793">793</span>
<span id="LID794" rel="#L794">794</span>
<span id="LID795" rel="#L795">795</span>
<span id="LID796" rel="#L796">796</span>
<span id="LID797" rel="#L797">797</span>
<span id="LID798" rel="#L798">798</span>
<span id="LID799" rel="#L799">799</span>
<span id="LID800" rel="#L800">800</span>
<span id="LID801" rel="#L801">801</span>
<span id="LID802" rel="#L802">802</span>
<span id="LID803" rel="#L803">803</span>
<span id="LID804" rel="#L804">804</span>
<span id="LID805" rel="#L805">805</span>
<span id="LID806" rel="#L806">806</span>
<span id="LID807" rel="#L807">807</span>
<span id="LID808" rel="#L808">808</span>
<span id="LID809" rel="#L809">809</span>
<span id="LID810" rel="#L810">810</span>
<span id="LID811" rel="#L811">811</span>
<span id="LID812" rel="#L812">812</span>
<span id="LID813" rel="#L813">813</span>
<span id="LID814" rel="#L814">814</span>
<span id="LID815" rel="#L815">815</span>
<span id="LID816" rel="#L816">816</span>
<span id="LID817" rel="#L817">817</span>
<span id="LID818" rel="#L818">818</span>
<span id="LID819" rel="#L819">819</span>
<span id="LID820" rel="#L820">820</span>
<span id="LID821" rel="#L821">821</span>
<span id="LID822" rel="#L822">822</span>
<span id="LID823" rel="#L823">823</span>
<span id="LID824" rel="#L824">824</span>
<span id="LID825" rel="#L825">825</span>
<span id="LID826" rel="#L826">826</span>
<span id="LID827" rel="#L827">827</span>
<span id="LID828" rel="#L828">828</span>
<span id="LID829" rel="#L829">829</span>
<span id="LID830" rel="#L830">830</span>
<span id="LID831" rel="#L831">831</span>
<span id="LID832" rel="#L832">832</span>
<span id="LID833" rel="#L833">833</span>
<span id="LID834" rel="#L834">834</span>
<span id="LID835" rel="#L835">835</span>
<span id="LID836" rel="#L836">836</span>
<span id="LID837" rel="#L837">837</span>
<span id="LID838" rel="#L838">838</span>
<span id="LID839" rel="#L839">839</span>
<span id="LID840" rel="#L840">840</span>
<span id="LID841" rel="#L841">841</span>
<span id="LID842" rel="#L842">842</span>
<span id="LID843" rel="#L843">843</span>
<span id="LID844" rel="#L844">844</span>
<span id="LID845" rel="#L845">845</span>
<span id="LID846" rel="#L846">846</span>
<span id="LID847" rel="#L847">847</span>
<span id="LID848" rel="#L848">848</span>
<span id="LID849" rel="#L849">849</span>
<span id="LID850" rel="#L850">850</span>
<span id="LID851" rel="#L851">851</span>
<span id="LID852" rel="#L852">852</span>
<span id="LID853" rel="#L853">853</span>
<span id="LID854" rel="#L854">854</span>
<span id="LID855" rel="#L855">855</span>
<span id="LID856" rel="#L856">856</span>
<span id="LID857" rel="#L857">857</span>
<span id="LID858" rel="#L858">858</span>
<span id="LID859" rel="#L859">859</span>
<span id="LID860" rel="#L860">860</span>
<span id="LID861" rel="#L861">861</span>
<span id="LID862" rel="#L862">862</span>
<span id="LID863" rel="#L863">863</span>
<span id="LID864" rel="#L864">864</span>
<span id="LID865" rel="#L865">865</span>
<span id="LID866" rel="#L866">866</span>
<span id="LID867" rel="#L867">867</span>
<span id="LID868" rel="#L868">868</span>
<span id="LID869" rel="#L869">869</span>
<span id="LID870" rel="#L870">870</span>
<span id="LID871" rel="#L871">871</span>
<span id="LID872" rel="#L872">872</span>
<span id="LID873" rel="#L873">873</span>
<span id="LID874" rel="#L874">874</span>
<span id="LID875" rel="#L875">875</span>
<span id="LID876" rel="#L876">876</span>
<span id="LID877" rel="#L877">877</span>
<span id="LID878" rel="#L878">878</span>
<span id="LID879" rel="#L879">879</span>
<span id="LID880" rel="#L880">880</span>
<span id="LID881" rel="#L881">881</span>
<span id="LID882" rel="#L882">882</span>
<span id="LID883" rel="#L883">883</span>
<span id="LID884" rel="#L884">884</span>
<span id="LID885" rel="#L885">885</span>
<span id="LID886" rel="#L886">886</span>
<span id="LID887" rel="#L887">887</span>
<span id="LID888" rel="#L888">888</span>
<span id="LID889" rel="#L889">889</span>
<span id="LID890" rel="#L890">890</span>
<span id="LID891" rel="#L891">891</span>
<span id="LID892" rel="#L892">892</span>
<span id="LID893" rel="#L893">893</span>
<span id="LID894" rel="#L894">894</span>
<span id="LID895" rel="#L895">895</span>
<span id="LID896" rel="#L896">896</span>
<span id="LID897" rel="#L897">897</span>
<span id="LID898" rel="#L898">898</span>
<span id="LID899" rel="#L899">899</span>
<span id="LID900" rel="#L900">900</span>
<span id="LID901" rel="#L901">901</span>
<span id="LID902" rel="#L902">902</span>
<span id="LID903" rel="#L903">903</span>
<span id="LID904" rel="#L904">904</span>
<span id="LID905" rel="#L905">905</span>
<span id="LID906" rel="#L906">906</span>
<span id="LID907" rel="#L907">907</span>
<span id="LID908" rel="#L908">908</span>
<span id="LID909" rel="#L909">909</span>
<span id="LID910" rel="#L910">910</span>
<span id="LID911" rel="#L911">911</span>
<span id="LID912" rel="#L912">912</span>
<span id="LID913" rel="#L913">913</span>
<span id="LID914" rel="#L914">914</span>
<span id="LID915" rel="#L915">915</span>
<span id="LID916" rel="#L916">916</span>
<span id="LID917" rel="#L917">917</span>
<span id="LID918" rel="#L918">918</span>
<span id="LID919" rel="#L919">919</span>
<span id="LID920" rel="#L920">920</span>
<span id="LID921" rel="#L921">921</span>
<span id="LID922" rel="#L922">922</span>
<span id="LID923" rel="#L923">923</span>
<span id="LID924" rel="#L924">924</span>
<span id="LID925" rel="#L925">925</span>
<span id="LID926" rel="#L926">926</span>
<span id="LID927" rel="#L927">927</span>
<span id="LID928" rel="#L928">928</span>
<span id="LID929" rel="#L929">929</span>
<span id="LID930" rel="#L930">930</span>
<span id="LID931" rel="#L931">931</span>
<span id="LID932" rel="#L932">932</span>
<span id="LID933" rel="#L933">933</span>
<span id="LID934" rel="#L934">934</span>
<span id="LID935" rel="#L935">935</span>
<span id="LID936" rel="#L936">936</span>
<span id="LID937" rel="#L937">937</span>
<span id="LID938" rel="#L938">938</span>
<span id="LID939" rel="#L939">939</span>
<span id="LID940" rel="#L940">940</span>
<span id="LID941" rel="#L941">941</span>
<span id="LID942" rel="#L942">942</span>
<span id="LID943" rel="#L943">943</span>
<span id="LID944" rel="#L944">944</span>
<span id="LID945" rel="#L945">945</span>
<span id="LID946" rel="#L946">946</span>
<span id="LID947" rel="#L947">947</span>
<span id="LID948" rel="#L948">948</span>
<span id="LID949" rel="#L949">949</span>
<span id="LID950" rel="#L950">950</span>
<span id="LID951" rel="#L951">951</span>
<span id="LID952" rel="#L952">952</span>
<span id="LID953" rel="#L953">953</span>
<span id="LID954" rel="#L954">954</span>
<span id="LID955" rel="#L955">955</span>
<span id="LID956" rel="#L956">956</span>
<span id="LID957" rel="#L957">957</span>
<span id="LID958" rel="#L958">958</span>
<span id="LID959" rel="#L959">959</span>
<span id="LID960" rel="#L960">960</span>
<span id="LID961" rel="#L961">961</span>
<span id="LID962" rel="#L962">962</span>
<span id="LID963" rel="#L963">963</span>
<span id="LID964" rel="#L964">964</span>
</pre>
          </td>
          <td width="100%">
            
              
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cp">&lt;?php</span></div><div class='line' id='LC2'><br/></div><div class='line' id='LC3'><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">function_exists</span><span class="p">(</span><span class="s1">&#39;curl_init&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC4'>&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nx">Exception</span><span class="p">(</span><span class="s1">&#39;Facebook needs the CURL PHP extension.&#39;</span><span class="p">);</span></div><div class='line' id='LC5'><span class="p">}</span></div><div class='line' id='LC6'><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">function_exists</span><span class="p">(</span><span class="s1">&#39;json_decode&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC7'>&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nx">Exception</span><span class="p">(</span><span class="s1">&#39;Facebook needs the JSON PHP extension.&#39;</span><span class="p">);</span></div><div class='line' id='LC8'><span class="p">}</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="sd">/**</span></div><div class='line' id='LC11'><span class="sd"> * Thrown when an API call returns an exception.</span></div><div class='line' id='LC12'><span class="sd"> *</span></div><div class='line' id='LC13'><span class="sd"> * @author Naitik Shah &lt;naitik@facebook.com&gt;</span></div><div class='line' id='LC14'><span class="sd"> */</span></div><div class='line' id='LC15'><span class="k">class</span> <span class="nc">FacebookApiException</span> <span class="k">extends</span> <span class="nx">Exception</span></div><div class='line' id='LC16'><span class="p">{</span></div><div class='line' id='LC17'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC18'><span class="sd">   * The result from the API server that represents the exception information.</span></div><div class='line' id='LC19'><span class="sd">   */</span></div><div class='line' id='LC20'>&nbsp;&nbsp;<span class="k">protected</span> <span class="nv">$result</span><span class="p">;</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC23'><span class="sd">   * Make a new API Exception with the given result.</span></div><div class='line' id='LC24'><span class="sd">   *</span></div><div class='line' id='LC25'><span class="sd">   * @param Array $result the result from the API server</span></div><div class='line' id='LC26'><span class="sd">   */</span></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">__construct</span><span class="p">(</span><span class="nv">$result</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">result</span> <span class="o">=</span> <span class="nv">$result</span><span class="p">;</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$code</span> <span class="o">=</span> <span class="nb">isset</span><span class="p">(</span><span class="nv">$result</span><span class="p">[</span><span class="s1">&#39;error_code&#39;</span><span class="p">])</span> <span class="o">?</span> <span class="nv">$result</span><span class="p">[</span><span class="s1">&#39;error_code&#39;</span><span class="p">]</span> <span class="o">:</span> <span class="m">0</span><span class="p">;</span></div><div class='line' id='LC31'><br/></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$result</span><span class="p">[</span><span class="s1">&#39;error_description&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// OAuth 2.0 Draft 10 style</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$msg</span> <span class="o">=</span> <span class="nv">$result</span><span class="p">[</span><span class="s1">&#39;error_description&#39;</span><span class="p">];</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$result</span><span class="p">[</span><span class="s1">&#39;error&#39;</span><span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="nb">is_array</span><span class="p">(</span><span class="nv">$result</span><span class="p">[</span><span class="s1">&#39;error&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// OAuth 2.0 Draft 00 style</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$msg</span> <span class="o">=</span> <span class="nv">$result</span><span class="p">[</span><span class="s1">&#39;error&#39;</span><span class="p">][</span><span class="s1">&#39;message&#39;</span><span class="p">];</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$result</span><span class="p">[</span><span class="s1">&#39;error_msg&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Rest server style</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$msg</span> <span class="o">=</span> <span class="nv">$result</span><span class="p">[</span><span class="s1">&#39;error_msg&#39;</span><span class="p">];</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$msg</span> <span class="o">=</span> <span class="s1">&#39;Unknown Error. Check getResult()&#39;</span><span class="p">;</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC44'><br/></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">parent</span><span class="o">::</span><span class="na">__construct</span><span class="p">(</span><span class="nv">$msg</span><span class="p">,</span> <span class="nv">$code</span><span class="p">);</span></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC49'><span class="sd">   * Return the associated result object returned by the API server.</span></div><div class='line' id='LC50'><span class="sd">   *</span></div><div class='line' id='LC51'><span class="sd">   * @returns Array the result from the API server</span></div><div class='line' id='LC52'><span class="sd">   */</span></div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">getResult</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">result</span><span class="p">;</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC56'><br/></div><div class='line' id='LC57'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC58'><span class="sd">   * Returns the associated type for the error. This will default to</span></div><div class='line' id='LC59'><span class="sd">   * &#39;Exception&#39; when a type is not available.</span></div><div class='line' id='LC60'><span class="sd">   *</span></div><div class='line' id='LC61'><span class="sd">   * @return String</span></div><div class='line' id='LC62'><span class="sd">   */</span></div><div class='line' id='LC63'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">getType</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$this</span><span class="o">-&gt;</span><span class="na">result</span><span class="p">[</span><span class="s1">&#39;error&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$error</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">result</span><span class="p">[</span><span class="s1">&#39;error&#39;</span><span class="p">];</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">is_string</span><span class="p">(</span><span class="nv">$error</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC67'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// OAuth 2.0 Draft 10 style</span></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$error</span><span class="p">;</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nb">is_array</span><span class="p">(</span><span class="nv">$error</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// OAuth 2.0 Draft 00 style</span></div><div class='line' id='LC71'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$error</span><span class="p">[</span><span class="s1">&#39;type&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$error</span><span class="p">[</span><span class="s1">&#39;type&#39;</span><span class="p">];</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC76'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;Exception&#39;</span><span class="p">;</span></div><div class='line' id='LC77'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC80'><span class="sd">   * To make debugging easier.</span></div><div class='line' id='LC81'><span class="sd">   *</span></div><div class='line' id='LC82'><span class="sd">   * @returns String the string representation of the error</span></div><div class='line' id='LC83'><span class="sd">   */</span></div><div class='line' id='LC84'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">__toString</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$str</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getType</span><span class="p">()</span> <span class="o">.</span> <span class="s1">&#39;: &#39;</span><span class="p">;</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$this</span><span class="o">-&gt;</span><span class="na">code</span> <span class="o">!=</span> <span class="m">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$str</span> <span class="o">.=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">code</span> <span class="o">.</span> <span class="s1">&#39;: &#39;</span><span class="p">;</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$str</span> <span class="o">.</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">message</span><span class="p">;</span></div><div class='line' id='LC90'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC91'><span class="p">}</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'><span class="sd">/**</span></div><div class='line' id='LC94'><span class="sd"> * Provides access to the Facebook Platform.</span></div><div class='line' id='LC95'><span class="sd"> *</span></div><div class='line' id='LC96'><span class="sd"> * @author Naitik Shah &lt;naitik@facebook.com&gt;</span></div><div class='line' id='LC97'><span class="sd"> */</span></div><div class='line' id='LC98'><span class="k">class</span> <span class="nc">Facebook</span></div><div class='line' id='LC99'><span class="p">{</span></div><div class='line' id='LC100'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC101'><span class="sd">   * Version.</span></div><div class='line' id='LC102'><span class="sd">   */</span></div><div class='line' id='LC103'>&nbsp;&nbsp;<span class="k">const</span> <span class="no">VERSION</span> <span class="o">=</span> <span class="s1">&#39;2.1.2&#39;</span><span class="p">;</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC106'><span class="sd">   * Default options for curl.</span></div><div class='line' id='LC107'><span class="sd">   */</span></div><div class='line' id='LC108'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">static</span> <span class="nv">$CURL_OPTS</span> <span class="o">=</span> <span class="k">array</span><span class="p">(</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">CURLOPT_CONNECTTIMEOUT</span> <span class="o">=&gt;</span> <span class="m">10</span><span class="p">,</span></div><div class='line' id='LC110'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">CURLOPT_RETURNTRANSFER</span> <span class="o">=&gt;</span> <span class="k">true</span><span class="p">,</span></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">CURLOPT_TIMEOUT</span>        <span class="o">=&gt;</span> <span class="m">60</span><span class="p">,</span></div><div class='line' id='LC112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">CURLOPT_USERAGENT</span>      <span class="o">=&gt;</span> <span class="s1">&#39;facebook-php-2.0&#39;</span><span class="p">,</span></div><div class='line' id='LC113'>&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC116'><span class="sd">   * List of query parameters that get automatically dropped when rebuilding</span></div><div class='line' id='LC117'><span class="sd">   * the current URL.</span></div><div class='line' id='LC118'><span class="sd">   */</span></div><div class='line' id='LC119'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">static</span> <span class="nv">$DROP_QUERY_PARAMS</span> <span class="o">=</span> <span class="k">array</span><span class="p">(</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;session&#39;</span><span class="p">,</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;signed_request&#39;</span><span class="p">,</span></div><div class='line' id='LC122'>&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC123'><br/></div><div class='line' id='LC124'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC125'><span class="sd">   * Maps aliases to Facebook domains.</span></div><div class='line' id='LC126'><span class="sd">   */</span></div><div class='line' id='LC127'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">static</span> <span class="nv">$DOMAIN_MAP</span> <span class="o">=</span> <span class="k">array</span><span class="p">(</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;api&#39;</span>      <span class="o">=&gt;</span> <span class="s1">&#39;https://api.facebook.com/&#39;</span><span class="p">,</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;api_read&#39;</span> <span class="o">=&gt;</span> <span class="s1">&#39;https://api-read.facebook.com/&#39;</span><span class="p">,</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;graph&#39;</span>    <span class="o">=&gt;</span> <span class="s1">&#39;https://graph.facebook.com/&#39;</span><span class="p">,</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;www&#39;</span>      <span class="o">=&gt;</span> <span class="s1">&#39;https://www.facebook.com/&#39;</span><span class="p">,</span></div><div class='line' id='LC132'>&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC133'><br/></div><div class='line' id='LC134'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC135'><span class="sd">   * The Application ID.</span></div><div class='line' id='LC136'><span class="sd">   */</span></div><div class='line' id='LC137'>&nbsp;&nbsp;<span class="k">protected</span> <span class="nv">$appId</span><span class="p">;</span></div><div class='line' id='LC138'><br/></div><div class='line' id='LC139'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC140'><span class="sd">   * The Application API Secret.</span></div><div class='line' id='LC141'><span class="sd">   */</span></div><div class='line' id='LC142'>&nbsp;&nbsp;<span class="k">protected</span> <span class="nv">$apiSecret</span><span class="p">;</span></div><div class='line' id='LC143'><br/></div><div class='line' id='LC144'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC145'><span class="sd">   * The active user session, if one is available.</span></div><div class='line' id='LC146'><span class="sd">   */</span></div><div class='line' id='LC147'>&nbsp;&nbsp;<span class="k">protected</span> <span class="nv">$session</span><span class="p">;</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC150'><span class="sd">   * The data from the signed_request token.</span></div><div class='line' id='LC151'><span class="sd">   */</span></div><div class='line' id='LC152'>&nbsp;&nbsp;<span class="k">protected</span> <span class="nv">$signedRequest</span><span class="p">;</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC155'><span class="sd">   * Indicates that we already loaded the session as best as we could.</span></div><div class='line' id='LC156'><span class="sd">   */</span></div><div class='line' id='LC157'>&nbsp;&nbsp;<span class="k">protected</span> <span class="nv">$sessionLoaded</span> <span class="o">=</span> <span class="k">false</span><span class="p">;</span></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC160'><span class="sd">   * Indicates if Cookie support should be enabled.</span></div><div class='line' id='LC161'><span class="sd">   */</span></div><div class='line' id='LC162'>&nbsp;&nbsp;<span class="k">protected</span> <span class="nv">$cookieSupport</span> <span class="o">=</span> <span class="k">false</span><span class="p">;</span></div><div class='line' id='LC163'><br/></div><div class='line' id='LC164'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC165'><span class="sd">   * Base domain for the Cookie.</span></div><div class='line' id='LC166'><span class="sd">   */</span></div><div class='line' id='LC167'>&nbsp;&nbsp;<span class="k">protected</span> <span class="nv">$baseDomain</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC168'><br/></div><div class='line' id='LC169'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC170'><span class="sd">   * Indicates if the CURL based @ syntax for file uploads is enabled.</span></div><div class='line' id='LC171'><span class="sd">   */</span></div><div class='line' id='LC172'>&nbsp;&nbsp;<span class="k">protected</span> <span class="nv">$fileUploadSupport</span> <span class="o">=</span> <span class="k">false</span><span class="p">;</span></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC175'><span class="sd">   * Initialize a Facebook Application.</span></div><div class='line' id='LC176'><span class="sd">   *</span></div><div class='line' id='LC177'><span class="sd">   * The configuration:</span></div><div class='line' id='LC178'><span class="sd">   * - appId: the application ID</span></div><div class='line' id='LC179'><span class="sd">   * - secret: the application secret</span></div><div class='line' id='LC180'><span class="sd">   * - cookie: (optional) boolean true to enable cookie support</span></div><div class='line' id='LC181'><span class="sd">   * - domain: (optional) domain for the cookie</span></div><div class='line' id='LC182'><span class="sd">   * - fileUpload: (optional) boolean indicating if file uploads are enabled</span></div><div class='line' id='LC183'><span class="sd">   *</span></div><div class='line' id='LC184'><span class="sd">   * @param Array $config the application configuration</span></div><div class='line' id='LC185'><span class="sd">   */</span></div><div class='line' id='LC186'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">__construct</span><span class="p">(</span><span class="nv">$config</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">setAppId</span><span class="p">(</span><span class="nv">$config</span><span class="p">[</span><span class="s1">&#39;appId&#39;</span><span class="p">]);</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">setApiSecret</span><span class="p">(</span><span class="nv">$config</span><span class="p">[</span><span class="s1">&#39;secret&#39;</span><span class="p">]);</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$config</span><span class="p">[</span><span class="s1">&#39;cookie&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">setCookieSupport</span><span class="p">(</span><span class="nv">$config</span><span class="p">[</span><span class="s1">&#39;cookie&#39;</span><span class="p">]);</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$config</span><span class="p">[</span><span class="s1">&#39;domain&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">setBaseDomain</span><span class="p">(</span><span class="nv">$config</span><span class="p">[</span><span class="s1">&#39;domain&#39;</span><span class="p">]);</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$config</span><span class="p">[</span><span class="s1">&#39;fileUpload&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">setFileUploadSupport</span><span class="p">(</span><span class="nv">$config</span><span class="p">[</span><span class="s1">&#39;fileUpload&#39;</span><span class="p">]);</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC198'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC201'><span class="sd">   * Set the Application ID.</span></div><div class='line' id='LC202'><span class="sd">   *</span></div><div class='line' id='LC203'><span class="sd">   * @param String $appId the Application ID</span></div><div class='line' id='LC204'><span class="sd">   */</span></div><div class='line' id='LC205'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">setAppId</span><span class="p">(</span><span class="nv">$appId</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">appId</span> <span class="o">=</span> <span class="nv">$appId</span><span class="p">;</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="p">;</span></div><div class='line' id='LC208'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC211'><span class="sd">   * Get the Application ID.</span></div><div class='line' id='LC212'><span class="sd">   *</span></div><div class='line' id='LC213'><span class="sd">   * @return String the Application ID</span></div><div class='line' id='LC214'><span class="sd">   */</span></div><div class='line' id='LC215'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">getAppId</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">appId</span><span class="p">;</span></div><div class='line' id='LC217'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC220'><span class="sd">   * Set the API Secret.</span></div><div class='line' id='LC221'><span class="sd">   *</span></div><div class='line' id='LC222'><span class="sd">   * @param String $appId the API Secret</span></div><div class='line' id='LC223'><span class="sd">   */</span></div><div class='line' id='LC224'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">setApiSecret</span><span class="p">(</span><span class="nv">$apiSecret</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC225'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">apiSecret</span> <span class="o">=</span> <span class="nv">$apiSecret</span><span class="p">;</span></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="p">;</span></div><div class='line' id='LC227'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC230'><span class="sd">   * Get the API Secret.</span></div><div class='line' id='LC231'><span class="sd">   *</span></div><div class='line' id='LC232'><span class="sd">   * @return String the API Secret</span></div><div class='line' id='LC233'><span class="sd">   */</span></div><div class='line' id='LC234'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">getApiSecret</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">apiSecret</span><span class="p">;</span></div><div class='line' id='LC236'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC237'><br/></div><div class='line' id='LC238'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC239'><span class="sd">   * Set the Cookie Support status.</span></div><div class='line' id='LC240'><span class="sd">   *</span></div><div class='line' id='LC241'><span class="sd">   * @param Boolean $cookieSupport the Cookie Support status</span></div><div class='line' id='LC242'><span class="sd">   */</span></div><div class='line' id='LC243'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">setCookieSupport</span><span class="p">(</span><span class="nv">$cookieSupport</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">cookieSupport</span> <span class="o">=</span> <span class="nv">$cookieSupport</span><span class="p">;</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="p">;</span></div><div class='line' id='LC246'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC247'><br/></div><div class='line' id='LC248'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC249'><span class="sd">   * Get the Cookie Support status.</span></div><div class='line' id='LC250'><span class="sd">   *</span></div><div class='line' id='LC251'><span class="sd">   * @return Boolean the Cookie Support status</span></div><div class='line' id='LC252'><span class="sd">   */</span></div><div class='line' id='LC253'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">useCookieSupport</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">cookieSupport</span><span class="p">;</span></div><div class='line' id='LC255'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC256'><br/></div><div class='line' id='LC257'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC258'><span class="sd">   * Set the base domain for the Cookie.</span></div><div class='line' id='LC259'><span class="sd">   *</span></div><div class='line' id='LC260'><span class="sd">   * @param String $domain the base domain</span></div><div class='line' id='LC261'><span class="sd">   */</span></div><div class='line' id='LC262'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">setBaseDomain</span><span class="p">(</span><span class="nv">$domain</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">baseDomain</span> <span class="o">=</span> <span class="nv">$domain</span><span class="p">;</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="p">;</span></div><div class='line' id='LC265'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC266'><br/></div><div class='line' id='LC267'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC268'><span class="sd">   * Get the base domain for the Cookie.</span></div><div class='line' id='LC269'><span class="sd">   *</span></div><div class='line' id='LC270'><span class="sd">   * @return String the base domain</span></div><div class='line' id='LC271'><span class="sd">   */</span></div><div class='line' id='LC272'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">getBaseDomain</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">baseDomain</span><span class="p">;</span></div><div class='line' id='LC274'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC275'><br/></div><div class='line' id='LC276'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC277'><span class="sd">   * Set the file upload support status.</span></div><div class='line' id='LC278'><span class="sd">   *</span></div><div class='line' id='LC279'><span class="sd">   * @param String $domain the base domain</span></div><div class='line' id='LC280'><span class="sd">   */</span></div><div class='line' id='LC281'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">setFileUploadSupport</span><span class="p">(</span><span class="nv">$fileUploadSupport</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">fileUploadSupport</span> <span class="o">=</span> <span class="nv">$fileUploadSupport</span><span class="p">;</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="p">;</span></div><div class='line' id='LC284'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC285'><br/></div><div class='line' id='LC286'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC287'><span class="sd">   * Get the file upload support status.</span></div><div class='line' id='LC288'><span class="sd">   *</span></div><div class='line' id='LC289'><span class="sd">   * @return String the base domain</span></div><div class='line' id='LC290'><span class="sd">   */</span></div><div class='line' id='LC291'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">useFileUploadSupport</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">fileUploadSupport</span><span class="p">;</span></div><div class='line' id='LC293'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC296'><span class="sd">   * Get the data from a signed_request token</span></div><div class='line' id='LC297'><span class="sd">   *</span></div><div class='line' id='LC298'><span class="sd">   * @return String the base domain</span></div><div class='line' id='LC299'><span class="sd">   */</span></div><div class='line' id='LC300'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">getSignedRequest</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nv">$this</span><span class="o">-&gt;</span><span class="na">signedRequest</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$_REQUEST</span><span class="p">[</span><span class="s1">&#39;signed_request&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">signedRequest</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">parseSignedRequest</span><span class="p">(</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$_REQUEST</span><span class="p">[</span><span class="s1">&#39;signed_request&#39;</span><span class="p">]);</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">signedRequest</span><span class="p">;</span></div><div class='line' id='LC308'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC309'><br/></div><div class='line' id='LC310'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC311'><span class="sd">   * Set the Session.</span></div><div class='line' id='LC312'><span class="sd">   *</span></div><div class='line' id='LC313'><span class="sd">   * @param Array $session the session</span></div><div class='line' id='LC314'><span class="sd">   * @param Boolean $write_cookie indicate if a cookie should be written. this</span></div><div class='line' id='LC315'><span class="sd">   * value is ignored if cookie support has been disabled.</span></div><div class='line' id='LC316'><span class="sd">   */</span></div><div class='line' id='LC317'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">setSession</span><span class="p">(</span><span class="nv">$session</span><span class="o">=</span><span class="k">null</span><span class="p">,</span> <span class="nv">$write_cookie</span><span class="o">=</span><span class="k">true</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">validateSessionObject</span><span class="p">(</span><span class="nv">$session</span><span class="p">);</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">sessionLoaded</span> <span class="o">=</span> <span class="k">true</span><span class="p">;</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">session</span> <span class="o">=</span> <span class="nv">$session</span><span class="p">;</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$write_cookie</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">setCookieFromSession</span><span class="p">(</span><span class="nv">$session</span><span class="p">);</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="p">;</span></div><div class='line' id='LC325'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC326'><br/></div><div class='line' id='LC327'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC328'><span class="sd">   * Get the session object. This will automatically look for a signed session</span></div><div class='line' id='LC329'><span class="sd">   * sent via the signed_request, Cookie or Query Parameters if needed.</span></div><div class='line' id='LC330'><span class="sd">   *</span></div><div class='line' id='LC331'><span class="sd">   * @return Array the session</span></div><div class='line' id='LC332'><span class="sd">   */</span></div><div class='line' id='LC333'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">getSession</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nv">$this</span><span class="o">-&gt;</span><span class="na">sessionLoaded</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span> <span class="o">=</span> <span class="k">null</span><span class="p">;</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$write_cookie</span> <span class="o">=</span> <span class="k">true</span><span class="p">;</span></div><div class='line' id='LC337'><br/></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// try loading session from signed_request in $_REQUEST</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$signedRequest</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getSignedRequest</span><span class="p">();</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$signedRequest</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// sig is good, use the signedRequest</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">createSessionFromSignedRequest</span><span class="p">(</span><span class="nv">$signedRequest</span><span class="p">);</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC344'><br/></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// try loading session from $_REQUEST</span></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nv">$session</span> <span class="o">&amp;&amp;</span> <span class="nb">isset</span><span class="p">(</span><span class="nv">$_REQUEST</span><span class="p">[</span><span class="s1">&#39;session&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span> <span class="o">=</span> <span class="nx">json_decode</span><span class="p">(</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">get_magic_quotes_gpc</span><span class="p">()</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="nb">stripslashes</span><span class="p">(</span><span class="nv">$_REQUEST</span><span class="p">[</span><span class="s1">&#39;session&#39;</span><span class="p">])</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="nv">$_REQUEST</span><span class="p">[</span><span class="s1">&#39;session&#39;</span><span class="p">],</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">true</span></div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">validateSessionObject</span><span class="p">(</span><span class="nv">$session</span><span class="p">);</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC355'><br/></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// try loading session from cookie if necessary</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nv">$session</span> <span class="o">&amp;&amp;</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">useCookieSupport</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$cookieName</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getSessionCookieName</span><span class="p">();</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$_COOKIE</span><span class="p">[</span><span class="nv">$cookieName</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span> <span class="o">=</span> <span class="k">array</span><span class="p">();</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">parse_str</span><span class="p">(</span><span class="nb">trim</span><span class="p">(</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">get_magic_quotes_gpc</span><span class="p">()</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="nb">stripslashes</span><span class="p">(</span><span class="nv">$_COOKIE</span><span class="p">[</span><span class="nv">$cookieName</span><span class="p">])</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="nv">$_COOKIE</span><span class="p">[</span><span class="nv">$cookieName</span><span class="p">],</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&quot;&#39;</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">),</span> <span class="nv">$session</span><span class="p">);</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">validateSessionObject</span><span class="p">(</span><span class="nv">$session</span><span class="p">);</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// write only if we need to delete a invalid session cookie</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$write_cookie</span> <span class="o">=</span> <span class="k">empty</span><span class="p">(</span><span class="nv">$session</span><span class="p">);</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC372'><br/></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">setSession</span><span class="p">(</span><span class="nv">$session</span><span class="p">,</span> <span class="nv">$write_cookie</span><span class="p">);</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC375'><br/></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">session</span><span class="p">;</span></div><div class='line' id='LC377'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC378'><br/></div><div class='line' id='LC379'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC380'><span class="sd">   * Get the UID from the session.</span></div><div class='line' id='LC381'><span class="sd">   *</span></div><div class='line' id='LC382'><span class="sd">   * @return String the UID if available</span></div><div class='line' id='LC383'><span class="sd">   */</span></div><div class='line' id='LC384'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">getUser</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getSession</span><span class="p">();</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$session</span> <span class="o">?</span> <span class="nv">$session</span><span class="p">[</span><span class="s1">&#39;uid&#39;</span><span class="p">]</span> <span class="o">:</span> <span class="k">null</span><span class="p">;</span></div><div class='line' id='LC387'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC388'><br/></div><div class='line' id='LC389'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC390'><span class="sd">   * Gets a OAuth access token.</span></div><div class='line' id='LC391'><span class="sd">   *</span></div><div class='line' id='LC392'><span class="sd">   * @return String the access token</span></div><div class='line' id='LC393'><span class="sd">   */</span></div><div class='line' id='LC394'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">getAccessToken</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getSession</span><span class="p">();</span></div><div class='line' id='LC396'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// either user session signed, or app signed</span></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$session</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$session</span><span class="p">[</span><span class="s1">&#39;access_token&#39;</span><span class="p">];</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getAppId</span><span class="p">()</span> <span class="o">.</span><span class="s1">&#39;|&#39;</span><span class="o">.</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getApiSecret</span><span class="p">();</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC402'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC403'><br/></div><div class='line' id='LC404'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC405'><span class="sd">   * Get a Login URL for use with redirects. By default, full page redirect is</span></div><div class='line' id='LC406'><span class="sd">   * assumed. If you are using the generated URL with a window.open() call in</span></div><div class='line' id='LC407'><span class="sd">   * JavaScript, you can pass in display=popup as part of the $params.</span></div><div class='line' id='LC408'><span class="sd">   *</span></div><div class='line' id='LC409'><span class="sd">   * The parameters:</span></div><div class='line' id='LC410'><span class="sd">   * - next: the url to go to after a successful login</span></div><div class='line' id='LC411'><span class="sd">   * - cancel_url: the url to go to after the user cancels</span></div><div class='line' id='LC412'><span class="sd">   * - req_perms: comma separated list of requested extended perms</span></div><div class='line' id='LC413'><span class="sd">   * - display: can be &quot;page&quot; (default, full page) or &quot;popup&quot;</span></div><div class='line' id='LC414'><span class="sd">   *</span></div><div class='line' id='LC415'><span class="sd">   * @param Array $params provide custom parameters</span></div><div class='line' id='LC416'><span class="sd">   * @return String the URL for the login flow</span></div><div class='line' id='LC417'><span class="sd">   */</span></div><div class='line' id='LC418'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">getLoginUrl</span><span class="p">(</span><span class="nv">$params</span><span class="o">=</span><span class="k">array</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$currentUrl</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getCurrentUrl</span><span class="p">();</span></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getUrl</span><span class="p">(</span></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;www&#39;</span><span class="p">,</span></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;login.php&#39;</span><span class="p">,</span></div><div class='line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">array_merge</span><span class="p">(</span><span class="k">array</span><span class="p">(</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;api_key&#39;</span>         <span class="o">=&gt;</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getAppId</span><span class="p">(),</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;cancel_url&#39;</span>      <span class="o">=&gt;</span> <span class="nv">$currentUrl</span><span class="p">,</span></div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;display&#39;</span>         <span class="o">=&gt;</span> <span class="s1">&#39;page&#39;</span><span class="p">,</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;fbconnect&#39;</span>       <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;next&#39;</span>            <span class="o">=&gt;</span> <span class="nv">$currentUrl</span><span class="p">,</span></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;return_session&#39;</span>  <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;session_version&#39;</span> <span class="o">=&gt;</span> <span class="m">3</span><span class="p">,</span></div><div class='line' id='LC431'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;v&#39;</span>               <span class="o">=&gt;</span> <span class="s1">&#39;1.0&#39;</span><span class="p">,</span></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">),</span> <span class="nv">$params</span><span class="p">)</span></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC434'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC435'><br/></div><div class='line' id='LC436'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC437'><span class="sd">   * Get a Logout URL suitable for use with redirects.</span></div><div class='line' id='LC438'><span class="sd">   *</span></div><div class='line' id='LC439'><span class="sd">   * The parameters:</span></div><div class='line' id='LC440'><span class="sd">   * - next: the url to go to after a successful logout</span></div><div class='line' id='LC441'><span class="sd">   *</span></div><div class='line' id='LC442'><span class="sd">   * @param Array $params provide custom parameters</span></div><div class='line' id='LC443'><span class="sd">   * @return String the URL for the logout flow</span></div><div class='line' id='LC444'><span class="sd">   */</span></div><div class='line' id='LC445'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">getLogoutUrl</span><span class="p">(</span><span class="nv">$params</span><span class="o">=</span><span class="k">array</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC446'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getUrl</span><span class="p">(</span></div><div class='line' id='LC447'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;www&#39;</span><span class="p">,</span></div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;logout.php&#39;</span><span class="p">,</span></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">array_merge</span><span class="p">(</span><span class="k">array</span><span class="p">(</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;next&#39;</span>         <span class="o">=&gt;</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getCurrentUrl</span><span class="p">(),</span></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;access_token&#39;</span> <span class="o">=&gt;</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getAccessToken</span><span class="p">(),</span></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">),</span> <span class="nv">$params</span><span class="p">)</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC454'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC455'><br/></div><div class='line' id='LC456'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC457'><span class="sd">   * Get a login status URL to fetch the status from facebook.</span></div><div class='line' id='LC458'><span class="sd">   *</span></div><div class='line' id='LC459'><span class="sd">   * The parameters:</span></div><div class='line' id='LC460'><span class="sd">   * - ok_session: the URL to go to if a session is found</span></div><div class='line' id='LC461'><span class="sd">   * - no_session: the URL to go to if the user is not connected</span></div><div class='line' id='LC462'><span class="sd">   * - no_user: the URL to go to if the user is not signed into facebook</span></div><div class='line' id='LC463'><span class="sd">   *</span></div><div class='line' id='LC464'><span class="sd">   * @param Array $params provide custom parameters</span></div><div class='line' id='LC465'><span class="sd">   * @return String the URL for the logout flow</span></div><div class='line' id='LC466'><span class="sd">   */</span></div><div class='line' id='LC467'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">getLoginStatusUrl</span><span class="p">(</span><span class="nv">$params</span><span class="o">=</span><span class="k">array</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getUrl</span><span class="p">(</span></div><div class='line' id='LC469'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;www&#39;</span><span class="p">,</span></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;extern/login_status.php&#39;</span><span class="p">,</span></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">array_merge</span><span class="p">(</span><span class="k">array</span><span class="p">(</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;api_key&#39;</span>         <span class="o">=&gt;</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getAppId</span><span class="p">(),</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;no_session&#39;</span>      <span class="o">=&gt;</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getCurrentUrl</span><span class="p">(),</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;no_user&#39;</span>         <span class="o">=&gt;</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getCurrentUrl</span><span class="p">(),</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;ok_session&#39;</span>      <span class="o">=&gt;</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getCurrentUrl</span><span class="p">(),</span></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;session_version&#39;</span> <span class="o">=&gt;</span> <span class="m">3</span><span class="p">,</span></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">),</span> <span class="nv">$params</span><span class="p">)</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC479'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC480'><br/></div><div class='line' id='LC481'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC482'><span class="sd">   * Make an API call.</span></div><div class='line' id='LC483'><span class="sd">   *</span></div><div class='line' id='LC484'><span class="sd">   * @param Array $params the API call parameters</span></div><div class='line' id='LC485'><span class="sd">   * @return the decoded response</span></div><div class='line' id='LC486'><span class="sd">   */</span></div><div class='line' id='LC487'>&nbsp;&nbsp;<span class="k">public</span> <span class="k">function</span> <span class="nf">api</span><span class="p">(</span><span class="cm">/* polymorphic */</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$args</span> <span class="o">=</span> <span class="nb">func_get_args</span><span class="p">();</span></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">is_array</span><span class="p">(</span><span class="nv">$args</span><span class="p">[</span><span class="m">0</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">_restserver</span><span class="p">(</span><span class="nv">$args</span><span class="p">[</span><span class="m">0</span><span class="p">]);</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">call_user_func_array</span><span class="p">(</span><span class="k">array</span><span class="p">(</span><span class="nv">$this</span><span class="p">,</span> <span class="s1">&#39;_graph&#39;</span><span class="p">),</span> <span class="nv">$args</span><span class="p">);</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC494'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC495'><br/></div><div class='line' id='LC496'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC497'><span class="sd">   * Invoke the old restserver.php endpoint.</span></div><div class='line' id='LC498'><span class="sd">   *</span></div><div class='line' id='LC499'><span class="sd">   * @param Array $params method call object</span></div><div class='line' id='LC500'><span class="sd">   * @return the decoded response object</span></div><div class='line' id='LC501'><span class="sd">   * @throws FacebookApiException</span></div><div class='line' id='LC502'><span class="sd">   */</span></div><div class='line' id='LC503'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">function</span> <span class="nf">_restserver</span><span class="p">(</span><span class="nv">$params</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC504'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// generic application level parameters</span></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$params</span><span class="p">[</span><span class="s1">&#39;api_key&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getAppId</span><span class="p">();</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$params</span><span class="p">[</span><span class="s1">&#39;format&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;json-strings&#39;</span><span class="p">;</span></div><div class='line' id='LC507'><br/></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$result</span> <span class="o">=</span> <span class="nx">json_decode</span><span class="p">(</span><span class="nv">$this</span><span class="o">-&gt;</span><span class="na">_oauthRequest</span><span class="p">(</span></div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getApiUrl</span><span class="p">(</span><span class="nv">$params</span><span class="p">[</span><span class="s1">&#39;method&#39;</span><span class="p">]),</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$params</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">),</span> <span class="k">true</span><span class="p">);</span></div><div class='line' id='LC512'><br/></div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// results are returned, errors are thrown</span></div><div class='line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">is_array</span><span class="p">(</span><span class="nv">$result</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">isset</span><span class="p">(</span><span class="nv">$result</span><span class="p">[</span><span class="s1">&#39;error_code&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC515'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nx">FacebookApiException</span><span class="p">(</span><span class="nv">$result</span><span class="p">);</span></div><div class='line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$result</span><span class="p">;</span></div><div class='line' id='LC518'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC519'><br/></div><div class='line' id='LC520'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC521'><span class="sd">   * Invoke the Graph API.</span></div><div class='line' id='LC522'><span class="sd">   *</span></div><div class='line' id='LC523'><span class="sd">   * @param String $path the path (required)</span></div><div class='line' id='LC524'><span class="sd">   * @param String $method the http method (default &#39;GET&#39;)</span></div><div class='line' id='LC525'><span class="sd">   * @param Array $params the query/post data</span></div><div class='line' id='LC526'><span class="sd">   * @return the decoded response object</span></div><div class='line' id='LC527'><span class="sd">   * @throws FacebookApiException</span></div><div class='line' id='LC528'><span class="sd">   */</span></div><div class='line' id='LC529'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">function</span> <span class="nf">_graph</span><span class="p">(</span><span class="nv">$path</span><span class="p">,</span> <span class="nv">$method</span><span class="o">=</span><span class="s1">&#39;GET&#39;</span><span class="p">,</span> <span class="nv">$params</span><span class="o">=</span><span class="k">array</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">is_array</span><span class="p">(</span><span class="nv">$method</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="k">empty</span><span class="p">(</span><span class="nv">$params</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$params</span> <span class="o">=</span> <span class="nv">$method</span><span class="p">;</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$method</span> <span class="o">=</span> <span class="s1">&#39;GET&#39;</span><span class="p">;</span></div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$params</span><span class="p">[</span><span class="s1">&#39;method&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nv">$method</span><span class="p">;</span> <span class="c1">// method override as we always do a POST</span></div><div class='line' id='LC535'><br/></div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$result</span> <span class="o">=</span> <span class="nx">json_decode</span><span class="p">(</span><span class="nv">$this</span><span class="o">-&gt;</span><span class="na">_oauthRequest</span><span class="p">(</span></div><div class='line' id='LC537'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getUrl</span><span class="p">(</span><span class="s1">&#39;graph&#39;</span><span class="p">,</span> <span class="nv">$path</span><span class="p">),</span></div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$params</span></div><div class='line' id='LC539'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">),</span> <span class="k">true</span><span class="p">);</span></div><div class='line' id='LC540'><br/></div><div class='line' id='LC541'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// results are returned, errors are thrown</span></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">is_array</span><span class="p">(</span><span class="nv">$result</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nb">isset</span><span class="p">(</span><span class="nv">$result</span><span class="p">[</span><span class="s1">&#39;error&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$e</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">FacebookApiException</span><span class="p">(</span><span class="nv">$result</span><span class="p">);</span></div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="nv">$e</span><span class="o">-&gt;</span><span class="na">getType</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC545'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// OAuth 2.0 Draft 00 style</span></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;OAuthException&#39;</span><span class="o">:</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// OAuth 2.0 Draft 10 style</span></div><div class='line' id='LC548'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;invalid_token&#39;</span><span class="o">:</span></div><div class='line' id='LC549'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">setSession</span><span class="p">(</span><span class="k">null</span><span class="p">);</span></div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC551'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nv">$e</span><span class="p">;</span></div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC553'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$result</span><span class="p">;</span></div><div class='line' id='LC554'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC555'><br/></div><div class='line' id='LC556'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC557'><span class="sd">   * Make a OAuth Request</span></div><div class='line' id='LC558'><span class="sd">   *</span></div><div class='line' id='LC559'><span class="sd">   * @param String $path the path (required)</span></div><div class='line' id='LC560'><span class="sd">   * @param Array $params the query/post data</span></div><div class='line' id='LC561'><span class="sd">   * @return the decoded response object</span></div><div class='line' id='LC562'><span class="sd">   * @throws FacebookApiException</span></div><div class='line' id='LC563'><span class="sd">   */</span></div><div class='line' id='LC564'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">function</span> <span class="nf">_oauthRequest</span><span class="p">(</span><span class="nv">$url</span><span class="p">,</span> <span class="nv">$params</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC565'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$params</span><span class="p">[</span><span class="s1">&#39;access_token&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC566'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$params</span><span class="p">[</span><span class="s1">&#39;access_token&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getAccessToken</span><span class="p">();</span></div><div class='line' id='LC567'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC568'><br/></div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// json_encode all params values that are not strings</span></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">foreach</span> <span class="p">(</span><span class="nv">$params</span> <span class="k">as</span> <span class="nv">$key</span> <span class="o">=&gt;</span> <span class="nv">$value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">is_string</span><span class="p">(</span><span class="nv">$value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$params</span><span class="p">[</span><span class="nv">$key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">json_encode</span><span class="p">(</span><span class="nv">$value</span><span class="p">);</span></div><div class='line' id='LC573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC574'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC575'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">makeRequest</span><span class="p">(</span><span class="nv">$url</span><span class="p">,</span> <span class="nv">$params</span><span class="p">);</span></div><div class='line' id='LC576'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC577'><br/></div><div class='line' id='LC578'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC579'><span class="sd">   * Makes an HTTP request. This method can be overriden by subclasses if</span></div><div class='line' id='LC580'><span class="sd">   * developers want to do fancier things or use something other than curl to</span></div><div class='line' id='LC581'><span class="sd">   * make the request.</span></div><div class='line' id='LC582'><span class="sd">   *</span></div><div class='line' id='LC583'><span class="sd">   * @param String $url the URL to make the request to</span></div><div class='line' id='LC584'><span class="sd">   * @param Array $params the parameters to use for the POST body</span></div><div class='line' id='LC585'><span class="sd">   * @param CurlHandler $ch optional initialized curl handle</span></div><div class='line' id='LC586'><span class="sd">   * @return String the response text</span></div><div class='line' id='LC587'><span class="sd">   */</span></div><div class='line' id='LC588'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">function</span> <span class="nf">makeRequest</span><span class="p">(</span><span class="nv">$url</span><span class="p">,</span> <span class="nv">$params</span><span class="p">,</span> <span class="nv">$ch</span><span class="o">=</span><span class="k">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC589'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nv">$ch</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$ch</span> <span class="o">=</span> <span class="nb">curl_init</span><span class="p">();</span></div><div class='line' id='LC591'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC592'><br/></div><div class='line' id='LC593'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$opts</span> <span class="o">=</span> <span class="nx">self</span><span class="o">::</span><span class="nv">$CURL_OPTS</span><span class="p">;</span></div><div class='line' id='LC594'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$this</span><span class="o">-&gt;</span><span class="na">useFileUploadSupport</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC595'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$opts</span><span class="p">[</span><span class="nx">CURLOPT_POSTFIELDS</span><span class="p">]</span> <span class="o">=</span> <span class="nv">$params</span><span class="p">;</span></div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$opts</span><span class="p">[</span><span class="nx">CURLOPT_POSTFIELDS</span><span class="p">]</span> <span class="o">=</span> <span class="nb">http_build_query</span><span class="p">(</span><span class="nv">$params</span><span class="p">,</span> <span class="k">null</span><span class="p">,</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">);</span></div><div class='line' id='LC598'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC599'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$opts</span><span class="p">[</span><span class="nx">CURLOPT_URL</span><span class="p">]</span> <span class="o">=</span> <span class="nv">$url</span><span class="p">;</span></div><div class='line' id='LC600'><br/></div><div class='line' id='LC601'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// disable the &#39;Expect: 100-continue&#39; behaviour. This causes CURL to wait</span></div><div class='line' id='LC602'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// for 2 seconds if the server does not support this header.</span></div><div class='line' id='LC603'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$opts</span><span class="p">[</span><span class="nx">CURLOPT_HTTPHEADER</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC604'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$existing_headers</span> <span class="o">=</span> <span class="nv">$opts</span><span class="p">[</span><span class="nx">CURLOPT_HTTPHEADER</span><span class="p">];</span></div><div class='line' id='LC605'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$existing_headers</span><span class="p">[]</span> <span class="o">=</span> <span class="s1">&#39;Expect:&#39;</span><span class="p">;</span></div><div class='line' id='LC606'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$opts</span><span class="p">[</span><span class="nx">CURLOPT_HTTPHEADER</span><span class="p">]</span> <span class="o">=</span> <span class="nv">$existing_headers</span><span class="p">;</span></div><div class='line' id='LC607'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC608'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$opts</span><span class="p">[</span><span class="nx">CURLOPT_HTTPHEADER</span><span class="p">]</span> <span class="o">=</span> <span class="k">array</span><span class="p">(</span><span class="s1">&#39;Expect:&#39;</span><span class="p">);</span></div><div class='line' id='LC609'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC610'><br/></div><div class='line' id='LC611'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">curl_setopt_array</span><span class="p">(</span><span class="nv">$ch</span><span class="p">,</span> <span class="nv">$opts</span><span class="p">);</span></div><div class='line' id='LC612'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$result</span> <span class="o">=</span> <span class="nb">curl_exec</span><span class="p">(</span><span class="nv">$ch</span><span class="p">);</span></div><div class='line' id='LC613'><br/></div><div class='line' id='LC614'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">curl_errno</span><span class="p">(</span><span class="nv">$ch</span><span class="p">)</span> <span class="o">==</span> <span class="m">60</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// CURLE_SSL_CACERT</span></div><div class='line' id='LC615'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="o">::</span><span class="na">errorLog</span><span class="p">(</span><span class="s1">&#39;Invalid or no certificate authority found, using bundled information&#39;</span><span class="p">);</span></div><div class='line' id='LC616'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">curl_setopt</span><span class="p">(</span><span class="nv">$ch</span><span class="p">,</span> <span class="nx">CURLOPT_CAINFO</span><span class="p">,</span></div><div class='line' id='LC617'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">dirname</span><span class="p">(</span><span class="k">__FILE__</span><span class="p">)</span> <span class="o">.</span> <span class="s1">&#39;/fb_ca_chain_bundle.crt&#39;</span><span class="p">);</span></div><div class='line' id='LC618'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$result</span> <span class="o">=</span> <span class="nb">curl_exec</span><span class="p">(</span><span class="nv">$ch</span><span class="p">);</span></div><div class='line' id='LC619'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC620'><br/></div><div class='line' id='LC621'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$result</span> <span class="o">===</span> <span class="k">false</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC622'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$e</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">FacebookApiException</span><span class="p">(</span><span class="k">array</span><span class="p">(</span></div><div class='line' id='LC623'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;error_code&#39;</span> <span class="o">=&gt;</span> <span class="nb">curl_errno</span><span class="p">(</span><span class="nv">$ch</span><span class="p">),</span></div><div class='line' id='LC624'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;error&#39;</span>      <span class="o">=&gt;</span> <span class="k">array</span><span class="p">(</span></div><div class='line' id='LC625'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;message&#39;</span> <span class="o">=&gt;</span> <span class="nb">curl_error</span><span class="p">(</span><span class="nv">$ch</span><span class="p">),</span></div><div class='line' id='LC626'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;type&#39;</span>    <span class="o">=&gt;</span> <span class="s1">&#39;CurlException&#39;</span><span class="p">,</span></div><div class='line' id='LC627'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">),</span></div><div class='line' id='LC628'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">));</span></div><div class='line' id='LC629'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">curl_close</span><span class="p">(</span><span class="nv">$ch</span><span class="p">);</span></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nv">$e</span><span class="p">;</span></div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC632'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">curl_close</span><span class="p">(</span><span class="nv">$ch</span><span class="p">);</span></div><div class='line' id='LC633'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$result</span><span class="p">;</span></div><div class='line' id='LC634'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC635'><br/></div><div class='line' id='LC636'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC637'><span class="sd">   * The name of the Cookie that contains the session.</span></div><div class='line' id='LC638'><span class="sd">   *</span></div><div class='line' id='LC639'><span class="sd">   * @return String the cookie name</span></div><div class='line' id='LC640'><span class="sd">   */</span></div><div class='line' id='LC641'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">function</span> <span class="nf">getSessionCookieName</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC642'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;fbs_&#39;</span> <span class="o">.</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getAppId</span><span class="p">();</span></div><div class='line' id='LC643'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC644'><br/></div><div class='line' id='LC645'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC646'><span class="sd">   * Set a JS Cookie based on the _passed in_ session. It does not use the</span></div><div class='line' id='LC647'><span class="sd">   * currently stored session -- you need to explicitly pass it in.</span></div><div class='line' id='LC648'><span class="sd">   *</span></div><div class='line' id='LC649'><span class="sd">   * @param Array $session the session to use for setting the cookie</span></div><div class='line' id='LC650'><span class="sd">   */</span></div><div class='line' id='LC651'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">function</span> <span class="nf">setCookieFromSession</span><span class="p">(</span><span class="nv">$session</span><span class="o">=</span><span class="k">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC652'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nv">$this</span><span class="o">-&gt;</span><span class="na">useCookieSupport</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC653'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC654'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC655'><br/></div><div class='line' id='LC656'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$cookieName</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getSessionCookieName</span><span class="p">();</span></div><div class='line' id='LC657'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$value</span> <span class="o">=</span> <span class="s1">&#39;deleted&#39;</span><span class="p">;</span></div><div class='line' id='LC658'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$expires</span> <span class="o">=</span> <span class="nb">time</span><span class="p">()</span> <span class="o">-</span> <span class="m">3600</span><span class="p">;</span></div><div class='line' id='LC659'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$domain</span> <span class="o">=</span> <span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getBaseDomain</span><span class="p">();</span></div><div class='line' id='LC660'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$session</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC661'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$value</span> <span class="o">=</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">.</span> <span class="nb">http_build_query</span><span class="p">(</span><span class="nv">$session</span><span class="p">,</span> <span class="k">null</span><span class="p">,</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">)</span> <span class="o">.</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">;</span></div><div class='line' id='LC662'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$session</span><span class="p">[</span><span class="s1">&#39;base_domain&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC663'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$domain</span> <span class="o">=</span> <span class="nv">$session</span><span class="p">[</span><span class="s1">&#39;base_domain&#39;</span><span class="p">];</span></div><div class='line' id='LC664'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC665'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$expires</span> <span class="o">=</span> <span class="nv">$session</span><span class="p">[</span><span class="s1">&#39;expires&#39;</span><span class="p">];</span></div><div class='line' id='LC666'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC667'><br/></div><div class='line' id='LC668'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// prepend dot if a domain is found</span></div><div class='line' id='LC669'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$domain</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC670'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$domain</span> <span class="o">=</span> <span class="s1">&#39;.&#39;</span> <span class="o">.</span> <span class="nv">$domain</span><span class="p">;</span></div><div class='line' id='LC671'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC672'><br/></div><div class='line' id='LC673'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if an existing cookie is not set, we dont need to delete it</span></div><div class='line' id='LC674'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$value</span> <span class="o">==</span> <span class="s1">&#39;deleted&#39;</span> <span class="o">&amp;&amp;</span> <span class="k">empty</span><span class="p">(</span><span class="nv">$_COOKIE</span><span class="p">[</span><span class="nv">$cookieName</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC676'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC677'><br/></div><div class='line' id='LC678'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">headers_sent</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC679'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="o">::</span><span class="na">errorLog</span><span class="p">(</span><span class="s1">&#39;Could not set cookie. Headers already sent.&#39;</span><span class="p">);</span></div><div class='line' id='LC680'><br/></div><div class='line' id='LC681'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// ignore for code coverage as we will never be able to setcookie in a CLI</span></div><div class='line' id='LC682'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// environment</span></div><div class='line' id='LC683'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// @codeCoverageIgnoreStart</span></div><div class='line' id='LC684'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC685'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">setcookie</span><span class="p">(</span><span class="nv">$cookieName</span><span class="p">,</span> <span class="nv">$value</span><span class="p">,</span> <span class="nv">$expires</span><span class="p">,</span> <span class="s1">&#39;/&#39;</span><span class="p">,</span> <span class="nv">$domain</span><span class="p">);</span></div><div class='line' id='LC686'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC687'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// @codeCoverageIgnoreEnd</span></div><div class='line' id='LC688'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC689'><br/></div><div class='line' id='LC690'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC691'><span class="sd">   * Validates a session_version=3 style session object.</span></div><div class='line' id='LC692'><span class="sd">   *</span></div><div class='line' id='LC693'><span class="sd">   * @param Array $session the session object</span></div><div class='line' id='LC694'><span class="sd">   * @return Array the session object if it validates, null otherwise</span></div><div class='line' id='LC695'><span class="sd">   */</span></div><div class='line' id='LC696'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">function</span> <span class="nf">validateSessionObject</span><span class="p">(</span><span class="nv">$session</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC697'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// make sure some essential fields exist</span></div><div class='line' id='LC698'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">is_array</span><span class="p">(</span><span class="nv">$session</span><span class="p">)</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC699'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">isset</span><span class="p">(</span><span class="nv">$session</span><span class="p">[</span><span class="s1">&#39;uid&#39;</span><span class="p">])</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC700'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">isset</span><span class="p">(</span><span class="nv">$session</span><span class="p">[</span><span class="s1">&#39;access_token&#39;</span><span class="p">])</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC701'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">isset</span><span class="p">(</span><span class="nv">$session</span><span class="p">[</span><span class="s1">&#39;sig&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC702'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// validate the signature</span></div><div class='line' id='LC703'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session_without_sig</span> <span class="o">=</span> <span class="nv">$session</span><span class="p">;</span></div><div class='line' id='LC704'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">unset</span><span class="p">(</span><span class="nv">$session_without_sig</span><span class="p">[</span><span class="s1">&#39;sig&#39;</span><span class="p">]);</span></div><div class='line' id='LC705'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$expected_sig</span> <span class="o">=</span> <span class="nx">self</span><span class="o">::</span><span class="na">generateSignature</span><span class="p">(</span></div><div class='line' id='LC706'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session_without_sig</span><span class="p">,</span></div><div class='line' id='LC707'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getApiSecret</span><span class="p">()</span></div><div class='line' id='LC708'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC709'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$session</span><span class="p">[</span><span class="s1">&#39;sig&#39;</span><span class="p">]</span> <span class="o">!=</span> <span class="nv">$expected_sig</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC710'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="o">::</span><span class="na">errorLog</span><span class="p">(</span><span class="s1">&#39;Got invalid session signature in cookie.&#39;</span><span class="p">);</span></div><div class='line' id='LC711'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span> <span class="o">=</span> <span class="k">null</span><span class="p">;</span></div><div class='line' id='LC712'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC713'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// check expiry time</span></div><div class='line' id='LC714'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC715'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span> <span class="o">=</span> <span class="k">null</span><span class="p">;</span></div><div class='line' id='LC716'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC717'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$session</span><span class="p">;</span></div><div class='line' id='LC718'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC719'><br/></div><div class='line' id='LC720'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC721'><span class="sd">   * Returns something that looks like our JS session object from the</span></div><div class='line' id='LC722'><span class="sd">   * signed token&#39;s data</span></div><div class='line' id='LC723'><span class="sd">   *</span></div><div class='line' id='LC724'><span class="sd">   * TODO: Nuke this once the login flow uses OAuth2</span></div><div class='line' id='LC725'><span class="sd">   *</span></div><div class='line' id='LC726'><span class="sd">   * @param Array the output of getSignedRequest</span></div><div class='line' id='LC727'><span class="sd">   * @return Array Something that will work as a session</span></div><div class='line' id='LC728'><span class="sd">   */</span></div><div class='line' id='LC729'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">function</span> <span class="nf">createSessionFromSignedRequest</span><span class="p">(</span><span class="nv">$data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC730'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$data</span><span class="p">[</span><span class="s1">&#39;oauth_token&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC731'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">null</span><span class="p">;</span></div><div class='line' id='LC732'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC733'><br/></div><div class='line' id='LC734'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span> <span class="o">=</span> <span class="k">array</span><span class="p">(</span></div><div class='line' id='LC735'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;uid&#39;</span>          <span class="o">=&gt;</span> <span class="nv">$data</span><span class="p">[</span><span class="s1">&#39;user_id&#39;</span><span class="p">],</span></div><div class='line' id='LC736'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;access_token&#39;</span> <span class="o">=&gt;</span> <span class="nv">$data</span><span class="p">[</span><span class="s1">&#39;oauth_token&#39;</span><span class="p">],</span></div><div class='line' id='LC737'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;expires&#39;</span>      <span class="o">=&gt;</span> <span class="nv">$data</span><span class="p">[</span><span class="s1">&#39;expires&#39;</span><span class="p">],</span></div><div class='line' id='LC738'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC739'><br/></div><div class='line' id='LC740'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// put a real sig, so that validateSignature works</span></div><div class='line' id='LC741'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span><span class="p">[</span><span class="s1">&#39;sig&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">self</span><span class="o">::</span><span class="na">generateSignature</span><span class="p">(</span></div><div class='line' id='LC742'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$session</span><span class="p">,</span></div><div class='line' id='LC743'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getApiSecret</span><span class="p">()</span></div><div class='line' id='LC744'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC745'><br/></div><div class='line' id='LC746'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$session</span><span class="p">;</span></div><div class='line' id='LC747'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC748'><br/></div><div class='line' id='LC749'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC750'><span class="sd">   * Parses a signed_request and validates the signature.</span></div><div class='line' id='LC751'><span class="sd">   * Then saves it in $this-&gt;signed_data</span></div><div class='line' id='LC752'><span class="sd">   *</span></div><div class='line' id='LC753'><span class="sd">   * @param String A signed token</span></div><div class='line' id='LC754'><span class="sd">   * @param Boolean Should we remove the parts of the payload that</span></div><div class='line' id='LC755'><span class="sd">   *                are used by the algorithm?</span></div><div class='line' id='LC756'><span class="sd">   * @return Array the payload inside it or null if the sig is wrong</span></div><div class='line' id='LC757'><span class="sd">   */</span></div><div class='line' id='LC758'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">function</span> <span class="nf">parseSignedRequest</span><span class="p">(</span><span class="nv">$signed_request</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC759'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">list</span><span class="p">(</span><span class="nv">$encoded_sig</span><span class="p">,</span> <span class="nv">$payload</span><span class="p">)</span> <span class="o">=</span> <span class="nb">explode</span><span class="p">(</span><span class="s1">&#39;.&#39;</span><span class="p">,</span> <span class="nv">$signed_request</span><span class="p">,</span> <span class="m">2</span><span class="p">);</span></div><div class='line' id='LC760'><br/></div><div class='line' id='LC761'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// decode the data</span></div><div class='line' id='LC762'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$sig</span> <span class="o">=</span> <span class="nx">self</span><span class="o">::</span><span class="na">base64UrlDecode</span><span class="p">(</span><span class="nv">$encoded_sig</span><span class="p">);</span></div><div class='line' id='LC763'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$data</span> <span class="o">=</span> <span class="nx">json_decode</span><span class="p">(</span><span class="nx">self</span><span class="o">::</span><span class="na">base64UrlDecode</span><span class="p">(</span><span class="nv">$payload</span><span class="p">),</span> <span class="k">true</span><span class="p">);</span></div><div class='line' id='LC764'><br/></div><div class='line' id='LC765'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">strtoupper</span><span class="p">(</span><span class="nv">$data</span><span class="p">[</span><span class="s1">&#39;algorithm&#39;</span><span class="p">])</span> <span class="o">!==</span> <span class="s1">&#39;HMAC-SHA256&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC766'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="o">::</span><span class="na">errorLog</span><span class="p">(</span><span class="s1">&#39;Unknown algorithm. Expected HMAC-SHA256&#39;</span><span class="p">);</span></div><div class='line' id='LC767'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">null</span><span class="p">;</span></div><div class='line' id='LC768'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC769'><br/></div><div class='line' id='LC770'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// check sig</span></div><div class='line' id='LC771'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$expected_sig</span> <span class="o">=</span> <span class="nx">hash_hmac</span><span class="p">(</span><span class="s1">&#39;sha256&#39;</span><span class="p">,</span> <span class="nv">$payload</span><span class="p">,</span></div><div class='line' id='LC772'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$this</span><span class="o">-&gt;</span><span class="na">getApiSecret</span><span class="p">(),</span> <span class="nv">$raw</span> <span class="o">=</span> <span class="k">true</span><span class="p">);</span></div><div class='line' id='LC773'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$sig</span> <span class="o">!==</span> <span class="nv">$expected_sig</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC774'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="o">::</span><span class="na">errorLog</span><span class="p">(</span><span class="s1">&#39;Bad Signed JSON signature!&#39;</span><span class="p">);</span></div><div class='line' id='LC775'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">null</span><span class="p">;</span></div><div class='line' id='LC776'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC777'><br/></div><div class='line' id='LC778'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$data</span><span class="p">;</span></div><div class='line' id='LC779'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC780'><br/></div><div class='line' id='LC781'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC782'><span class="sd">   * Build the URL for api given parameters.</span></div><div class='line' id='LC783'><span class="sd">   *</span></div><div class='line' id='LC784'><span class="sd">   * @param $method String the method name.</span></div><div class='line' id='LC785'><span class="sd">   * @return String the URL for the given parameters</span></div><div class='line' id='LC786'><span class="sd">   */</span></div><div class='line' id='LC787'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">function</span> <span class="nf">getApiUrl</span><span class="p">(</span><span class="nv">$method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC788'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">static</span> <span class="nv">$READ_ONLY_CALLS</span> <span class="o">=</span></div><div class='line' id='LC789'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">array</span><span class="p">(</span><span class="s1">&#39;admin.getallocation&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC790'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;admin.getappproperties&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC791'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;admin.getbannedusers&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC792'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;admin.getlivestreamvialink&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC793'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;admin.getmetrics&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC794'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;admin.getrestrictioninfo&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC795'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;application.getpublicinfo&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC796'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;auth.getapppublickey&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC797'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;auth.getsession&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC798'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;auth.getsignedpublicsessiondata&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC799'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;comments.get&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC800'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;connect.getunconnectedfriendscount&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC801'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;dashboard.getactivity&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC802'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;dashboard.getcount&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC803'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;dashboard.getglobalnews&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC804'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;dashboard.getnews&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC805'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;dashboard.multigetcount&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC806'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;dashboard.multigetnews&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC807'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;data.getcookies&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC808'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;events.get&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC809'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;events.getmembers&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC810'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;fbml.getcustomtags&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC811'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;feed.getappfriendstories&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC812'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;feed.getregisteredtemplatebundlebyid&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC813'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;feed.getregisteredtemplatebundles&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC814'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;fql.multiquery&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC815'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;fql.query&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC816'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;friends.arefriends&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC817'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;friends.get&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC818'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;friends.getappusers&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC819'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;friends.getlists&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC820'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;friends.getmutualfriends&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC821'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;gifts.get&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC822'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;groups.get&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC823'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;groups.getmembers&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC824'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;intl.gettranslations&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC825'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;links.get&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC826'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;notes.get&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC827'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;notifications.get&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC828'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;pages.getinfo&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC829'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;pages.isadmin&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC830'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;pages.isappadded&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC831'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;pages.isfan&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC832'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;permissions.checkavailableapiaccess&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC833'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;permissions.checkgrantedapiaccess&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC834'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;photos.get&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC835'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;photos.getalbums&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC836'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;photos.gettags&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC837'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;profile.getinfo&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC838'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;profile.getinfooptions&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC839'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;stream.get&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC840'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;stream.getcomments&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC841'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;stream.getfilters&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC842'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;users.getinfo&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC843'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;users.getloggedinuser&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC844'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;users.getstandardinfo&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC845'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;users.hasapppermission&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC846'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;users.isappuser&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC847'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;users.isverified&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">,</span></div><div class='line' id='LC848'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;video.getuploadlimits&#39;</span> <span class="o">=&gt;</span> <span class="m">1</span><span class="p">);</span></div><div class='line' id='LC849'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$name</span> <span class="o">=</span> <span class="s1">&#39;api&#39;</span><span class="p">;</span></div><div class='line' id='LC850'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">isset</span><span class="p">(</span><span class="nv">$READ_ONLY_CALLS</span><span class="p">[</span><span class="nb">strtolower</span><span class="p">(</span><span class="nv">$method</span><span class="p">)]))</span> <span class="p">{</span></div><div class='line' id='LC851'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$name</span> <span class="o">=</span> <span class="s1">&#39;api_read&#39;</span><span class="p">;</span></div><div class='line' id='LC852'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC853'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="o">::</span><span class="na">getUrl</span><span class="p">(</span><span class="nv">$name</span><span class="p">,</span> <span class="s1">&#39;restserver.php&#39;</span><span class="p">);</span></div><div class='line' id='LC854'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC855'><br/></div><div class='line' id='LC856'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC857'><span class="sd">   * Build the URL for given domain alias, path and parameters.</span></div><div class='line' id='LC858'><span class="sd">   *</span></div><div class='line' id='LC859'><span class="sd">   * @param $name String the name of the domain</span></div><div class='line' id='LC860'><span class="sd">   * @param $path String optional path (without a leading slash)</span></div><div class='line' id='LC861'><span class="sd">   * @param $params Array optional query parameters</span></div><div class='line' id='LC862'><span class="sd">   * @return String the URL for the given parameters</span></div><div class='line' id='LC863'><span class="sd">   */</span></div><div class='line' id='LC864'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">function</span> <span class="nf">getUrl</span><span class="p">(</span><span class="nv">$name</span><span class="p">,</span> <span class="nv">$path</span><span class="o">=</span><span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="nv">$params</span><span class="o">=</span><span class="k">array</span><span class="p">())</span> <span class="p">{</span></div><div class='line' id='LC865'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$url</span> <span class="o">=</span> <span class="nx">self</span><span class="o">::</span><span class="nv">$DOMAIN_MAP</span><span class="p">[</span><span class="nv">$name</span><span class="p">];</span></div><div class='line' id='LC866'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$path</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC867'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$path</span><span class="p">[</span><span class="m">0</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;/&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC868'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$path</span> <span class="o">=</span> <span class="nb">substr</span><span class="p">(</span><span class="nv">$path</span><span class="p">,</span> <span class="m">1</span><span class="p">);</span></div><div class='line' id='LC869'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC870'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$url</span> <span class="o">.=</span> <span class="nv">$path</span><span class="p">;</span></div><div class='line' id='LC871'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC872'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nv">$params</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC873'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$url</span> <span class="o">.=</span> <span class="s1">&#39;?&#39;</span> <span class="o">.</span> <span class="nb">http_build_query</span><span class="p">(</span><span class="nv">$params</span><span class="p">,</span> <span class="k">null</span><span class="p">,</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">);</span></div><div class='line' id='LC874'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC875'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$url</span><span class="p">;</span></div><div class='line' id='LC876'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC877'><br/></div><div class='line' id='LC878'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC879'><span class="sd">   * Returns the Current URL, stripping it of known FB parameters that should</span></div><div class='line' id='LC880'><span class="sd">   * not persist.</span></div><div class='line' id='LC881'><span class="sd">   *</span></div><div class='line' id='LC882'><span class="sd">   * @return String the current URL</span></div><div class='line' id='LC883'><span class="sd">   */</span></div><div class='line' id='LC884'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">function</span> <span class="nf">getCurrentUrl</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC885'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$protocol</span> <span class="o">=</span> <span class="nb">isset</span><span class="p">(</span><span class="nv">$_SERVER</span><span class="p">[</span><span class="s1">&#39;HTTPS&#39;</span><span class="p">])</span> <span class="o">&amp;&amp;</span> <span class="nv">$_SERVER</span><span class="p">[</span><span class="s1">&#39;HTTPS&#39;</span><span class="p">]</span> <span class="o">==</span> <span class="s1">&#39;on&#39;</span></div><div class='line' id='LC886'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="s1">&#39;https://&#39;</span></div><div class='line' id='LC887'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="s1">&#39;http://&#39;</span><span class="p">;</span></div><div class='line' id='LC888'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$currentUrl</span> <span class="o">=</span> <span class="nv">$protocol</span> <span class="o">.</span> <span class="nv">$_SERVER</span><span class="p">[</span><span class="s1">&#39;HTTP_HOST&#39;</span><span class="p">]</span> <span class="o">.</span> <span class="nv">$_SERVER</span><span class="p">[</span><span class="s1">&#39;REQUEST_URI&#39;</span><span class="p">];</span></div><div class='line' id='LC889'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$parts</span> <span class="o">=</span> <span class="nb">parse_url</span><span class="p">(</span><span class="nv">$currentUrl</span><span class="p">);</span></div><div class='line' id='LC890'><br/></div><div class='line' id='LC891'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// drop known fb params</span></div><div class='line' id='LC892'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$query</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC893'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">empty</span><span class="p">(</span><span class="nv">$parts</span><span class="p">[</span><span class="s1">&#39;query&#39;</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC894'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$params</span> <span class="o">=</span> <span class="k">array</span><span class="p">();</span></div><div class='line' id='LC895'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">parse_str</span><span class="p">(</span><span class="nv">$parts</span><span class="p">[</span><span class="s1">&#39;query&#39;</span><span class="p">],</span> <span class="nv">$params</span><span class="p">);</span></div><div class='line' id='LC896'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">foreach</span><span class="p">(</span><span class="nx">self</span><span class="o">::</span><span class="nv">$DROP_QUERY_PARAMS</span> <span class="k">as</span> <span class="nv">$key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC897'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">unset</span><span class="p">(</span><span class="nv">$params</span><span class="p">[</span><span class="nv">$key</span><span class="p">]);</span></div><div class='line' id='LC898'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC899'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">empty</span><span class="p">(</span><span class="nv">$params</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC900'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$query</span> <span class="o">=</span> <span class="s1">&#39;?&#39;</span> <span class="o">.</span> <span class="nb">http_build_query</span><span class="p">(</span><span class="nv">$params</span><span class="p">,</span> <span class="k">null</span><span class="p">,</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">);</span></div><div class='line' id='LC901'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC902'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC903'><br/></div><div class='line' id='LC904'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// use port if non default</span></div><div class='line' id='LC905'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$port</span> <span class="o">=</span></div><div class='line' id='LC906'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">isset</span><span class="p">(</span><span class="nv">$parts</span><span class="p">[</span><span class="s1">&#39;port&#39;</span><span class="p">])</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC907'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">((</span><span class="nv">$protocol</span> <span class="o">===</span> <span class="s1">&#39;http://&#39;</span> <span class="o">&amp;&amp;</span> <span class="nv">$parts</span><span class="p">[</span><span class="s1">&#39;port&#39;</span><span class="p">]</span> <span class="o">!==</span> <span class="m">80</span><span class="p">)</span> <span class="o">||</span></div><div class='line' id='LC908'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nv">$protocol</span> <span class="o">===</span> <span class="s1">&#39;https://&#39;</span> <span class="o">&amp;&amp;</span> <span class="nv">$parts</span><span class="p">[</span><span class="s1">&#39;port&#39;</span><span class="p">]</span> <span class="o">!==</span> <span class="m">443</span><span class="p">))</span></div><div class='line' id='LC909'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="s1">&#39;:&#39;</span> <span class="o">.</span> <span class="nv">$parts</span><span class="p">[</span><span class="s1">&#39;port&#39;</span><span class="p">]</span> <span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC910'><br/></div><div class='line' id='LC911'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// rebuild</span></div><div class='line' id='LC912'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nv">$protocol</span> <span class="o">.</span> <span class="nv">$parts</span><span class="p">[</span><span class="s1">&#39;host&#39;</span><span class="p">]</span> <span class="o">.</span> <span class="nv">$port</span> <span class="o">.</span> <span class="nv">$parts</span><span class="p">[</span><span class="s1">&#39;path&#39;</span><span class="p">]</span> <span class="o">.</span> <span class="nv">$query</span><span class="p">;</span></div><div class='line' id='LC913'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC914'><br/></div><div class='line' id='LC915'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC916'><span class="sd">   * Generate a signature for the given params and secret.</span></div><div class='line' id='LC917'><span class="sd">   *</span></div><div class='line' id='LC918'><span class="sd">   * @param Array $params the parameters to sign</span></div><div class='line' id='LC919'><span class="sd">   * @param String $secret the secret to sign with</span></div><div class='line' id='LC920'><span class="sd">   * @return String the generated signature</span></div><div class='line' id='LC921'><span class="sd">   */</span></div><div class='line' id='LC922'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">static</span> <span class="k">function</span> <span class="nf">generateSignature</span><span class="p">(</span><span class="nv">$params</span><span class="p">,</span> <span class="nv">$secret</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC923'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// work with sorted data</span></div><div class='line' id='LC924'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">ksort</span><span class="p">(</span><span class="nv">$params</span><span class="p">);</span></div><div class='line' id='LC925'><br/></div><div class='line' id='LC926'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// generate the base string</span></div><div class='line' id='LC927'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$base_string</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC928'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">foreach</span><span class="p">(</span><span class="nv">$params</span> <span class="k">as</span> <span class="nv">$key</span> <span class="o">=&gt;</span> <span class="nv">$value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC929'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$base_string</span> <span class="o">.=</span> <span class="nv">$key</span> <span class="o">.</span> <span class="s1">&#39;=&#39;</span> <span class="o">.</span> <span class="nv">$value</span><span class="p">;</span></div><div class='line' id='LC930'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC931'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nv">$base_string</span> <span class="o">.=</span> <span class="nv">$secret</span><span class="p">;</span></div><div class='line' id='LC932'><br/></div><div class='line' id='LC933'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">md5</span><span class="p">(</span><span class="nv">$base_string</span><span class="p">);</span></div><div class='line' id='LC934'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC935'><br/></div><div class='line' id='LC936'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC937'><span class="sd">   * Prints to the error log if you aren&#39;t in command line mode.</span></div><div class='line' id='LC938'><span class="sd">   *</span></div><div class='line' id='LC939'><span class="sd">   * @param String log message</span></div><div class='line' id='LC940'><span class="sd">   */</span></div><div class='line' id='LC941'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">static</span> <span class="k">function</span> <span class="nf">errorLog</span><span class="p">(</span><span class="nv">$msg</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC942'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// disable error log if we are running in a CLI environment</span></div><div class='line' id='LC943'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// @codeCoverageIgnoreStart</span></div><div class='line' id='LC944'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">php_sapi_name</span><span class="p">()</span> <span class="o">!=</span> <span class="s1">&#39;cli&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC945'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">error_log</span><span class="p">(</span><span class="nv">$msg</span><span class="p">);</span></div><div class='line' id='LC946'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC947'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// uncomment this if you want to see the errors on the page</span></div><div class='line' id='LC948'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// print &#39;error_log: &#39;.$msg.&quot;\n&quot;;</span></div><div class='line' id='LC949'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// @codeCoverageIgnoreEnd</span></div><div class='line' id='LC950'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC951'><br/></div><div class='line' id='LC952'>&nbsp;&nbsp;<span class="sd">/**</span></div><div class='line' id='LC953'><span class="sd">   * Base64 encoding that doesn&#39;t need to be urlencode()ed.</span></div><div class='line' id='LC954'><span class="sd">   * Exactly the same as base64_encode except it uses</span></div><div class='line' id='LC955'><span class="sd">   *   - instead of +</span></div><div class='line' id='LC956'><span class="sd">   *   _ instead of /</span></div><div class='line' id='LC957'><span class="sd">   *</span></div><div class='line' id='LC958'><span class="sd">   * @param String base64UrlEncodeded string</span></div><div class='line' id='LC959'><span class="sd">   */</span></div><div class='line' id='LC960'>&nbsp;&nbsp;<span class="k">protected</span> <span class="k">static</span> <span class="k">function</span> <span class="nf">base64UrlDecode</span><span class="p">(</span><span class="nv">$input</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC961'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">base64_decode</span><span class="p">(</span><span class="nb">strtr</span><span class="p">(</span><span class="nv">$input</span><span class="p">,</span> <span class="s1">&#39;-_&#39;</span><span class="p">,</span> <span class="s1">&#39;+/&#39;</span><span class="p">));</span></div><div class='line' id='LC962'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC963'><span class="p">}</span></div><div class='line' id='LC964'><br/></div></pre></div>
              
            
          </td>
        </tr>
      </table>
    
  </div>


            </div>
          </div>
        </div>
      </div>
    

    </div>
  



<div class="frame frame-loading" style="display:none;">
  <img src="/images/modules/ajax/big_spinner_336699.gif">
</div>
    </div>
  
      
    </div>

    <div id="footer" class="clearfix">
      <div class="site">
        <div class="sponsor">
          <a href="http://www.rackspace.com" class="logo">
            <img alt="Dedicated Server" src="https://assets0.github.com/images/modules/footer/rackspace_logo.png?v2?248fa7cbf2c203fd6cfa520c46540d5ede569831" />
          </a>
          Powered by the <a href="http://www.rackspace.com ">Dedicated
          Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
          Computing</a> of Rackspace Hosting<span>&reg;</span>
        </div>

        <ul class="links">
          <li class="blog"><a href="https://github.com/blog">Blog</a></li>
          <li><a href="http://support.github.com?sso=ascYyneW_G7IFZxRMK4_vGUHIAJfIZl1FsNcKtpdrBced_PGbGrnQM9L2jrUq6xtPaFZflHRNIFJCJCqse4QhCBAQtBOB8JBYjlZ7UcGmlgItXIuPxJcn6O7c9IFFYXplv7ekaVgXpHRRe9e_oHlop_9ZBbGptwJpA-NVxCYDjpVEfnE3P4pvrFEhfJvk1IpddR_jy0iwZcMRZhdpOLvMiasBb0Av41_HG99NKMplbg">Support</a></li>
          <li><a href="https://github.com/training">Training</a></li>
          <li><a href="http://jobs.github.com">Job Board</a></li>
          <li><a href="http://shop.github.com">Shop</a></li>
          <li><a href="https://github.com/contact">Contact</a></li>
          <li><a href="http://develop.github.com">API</a></li>
          <li><a href="http://status.github.com">Status</a></li>
        </ul>
        <ul class="sosueme">
          <li class="main">&copy; 2011 <span id="_rrt" title="0.09951s from fe3.rs.github.com">GitHub</span> Inc. All rights reserved.</li>
          <li><a href="/site/terms">Terms of Service</a></li>
          <li><a href="/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
        </ul>
      </div>
    </div><!-- /#footer -->

    
      
      
        <!-- current locale:  -->
        <div class="locales">
          <div class="site">

            <ul class="choices clearfix limited-locales">
              <li><span class="current">English</span></li>
              
                  <li><a rel="nofollow" href="?locale=de">Deutsch</a></li>
              
                  <li><a rel="nofollow" href="?locale=fr">Français</a></li>
              
                  <li><a rel="nofollow" href="?locale=ja">日本語</a></li>
              
                  <li><a rel="nofollow" href="?locale=pt-BR">Português (BR)</a></li>
              
                  <li><a rel="nofollow" href="?locale=ru">Русский</a></li>
              
                  <li><a rel="nofollow" href="?locale=zh">中文</a></li>
              
              <li class="all"><a href="#" class="minibutton btn-forward js-all-locales"><span><span class="icon"></span>See all available languages</span></a></li>
            </ul>

            <div class="all-locales clearfix">
              <h3>Your current locale selection: <strong>English</strong>. Choose another?</h3>
              
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=en">English</a></li>
                  
                      <li><a rel="nofollow" href="?locale=af">Afrikaans</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ca">Català</a></li>
                  
                      <li><a rel="nofollow" href="?locale=cs">Čeština</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=de">Deutsch</a></li>
                  
                      <li><a rel="nofollow" href="?locale=es">Español</a></li>
                  
                      <li><a rel="nofollow" href="?locale=fr">Français</a></li>
                  
                      <li><a rel="nofollow" href="?locale=hr">Hrvatski</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=id">Indonesia</a></li>
                  
                      <li><a rel="nofollow" href="?locale=it">Italiano</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ja">日本語</a></li>
                  
                      <li><a rel="nofollow" href="?locale=nl">Nederlands</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=no">Norsk</a></li>
                  
                      <li><a rel="nofollow" href="?locale=pl">Polski</a></li>
                  
                      <li><a rel="nofollow" href="?locale=pt-BR">Português (BR)</a></li>
                  
                      <li><a rel="nofollow" href="?locale=ru">Русский</a></li>
                  
                </ul>
              
                <ul class="choices">
                  
                      <li><a rel="nofollow" href="?locale=sr">Српски</a></li>
                  
                      <li><a rel="nofollow" href="?locale=sv">Svenska</a></li>
                  
                      <li><a rel="nofollow" href="?locale=zh">中文</a></li>
                  
                </ul>
              
            </div>

          </div>
          <div class="fade"></div>
        </div>
      
    

    <script>window._auth_token = "309fa714e2e00bbc72c6426f4b92a5ac5f9cc3ab"</script>
    <div id="keyboard_shortcuts_pane" style="display:none">
  <h2>Keyboard Shortcuts</h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->
    <div class="column middle">
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>t</dt>
        <dd>Open tree</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>p</dt>
        <dd>Open parent</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
    </div><!-- /.column.first -->
    <div class="column last">
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->
  </div><!-- /.columns.equacols -->

  <div class="rule"></div>

  <h3>Issues</h3>

  <div class="columns threecols">
    <div class="column first">
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>x</dt>
        <dd>Toggle select target</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.column.first -->
    <div class="column middle">
      <dl class="keyboard-mappings">
        <dt>I</dt>
        <dd>Mark selected as read</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>U</dt>
        <dd>Mark selected as unread</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>e</dt>
        <dd>Close selected</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Remove selected from view</dd>
      </dl>
    </div><!-- /.column.middle -->
    <div class="column last">
      <dl class="keyboard-mappings">
        <dt>c</dt>
        <dd>Create issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>l</dt>
        <dd>Create label</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>i</dt>
        <dd>Back to inbox</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>u</dt>
        <dd>Back to issues</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>/</dt>
        <dd>Focus issues search</dd>
      </dl>
    </div>
  </div>

  <div class="rule"></div>

  <h3>Network Graph</h3>
  <div class="columns equacols">
    <div class="column first">
      <dl class="keyboard-mappings">
        <dt>← <em>or</em> h</dt>
        <dd>Scroll left</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>→ <em>or</em> l</dt>
        <dd>Scroll right</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>↑ <em>or</em> k</dt>
        <dd>Scroll up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>↓ <em>or</em> j</dt>
        <dd>Scroll down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>t</dt>
        <dd>Toggle visibility of head labels</dd>
      </dl>
    </div><!-- /.column.first -->
    <div class="column last">
      <dl class="keyboard-mappings">
        <dt>shift ← <em>or</em> shift h</dt>
        <dd>Scroll all the way left</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>shift → <em>or</em> shift l</dt>
        <dd>Scroll all the way right</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>shift ↑ <em>or</em> shift k</dt>
        <dd>Scroll all the way up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>shift ↓ <em>or</em> shift j</dt>
        <dd>Scroll all the way down</dd>
      </dl>
    </div><!-- /.column.last -->
  </div>

</div>
    

    <!--[if IE 8]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie8")
    </script>
    <![endif]-->

    <!--[if IE 7]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie7")
    </script>
    <![endif]-->

    <script type="text/javascript">
      _kmq.push(['trackClick', 'entice-signup-button', 'Entice banner clicked']);
      
    </script>
    
  </body>
</html>

