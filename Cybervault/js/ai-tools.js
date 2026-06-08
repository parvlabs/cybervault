/* ══════════════════════════════════════════════
   CYBERVAULT — AI TOOLS DATABASE (500+ Tools)
   28 Categories · Free · Freemium · Paid · Student
   ══════════════════════════════════════════════ */

const AI_TOOLS = [

/* ── 1. AI CHATBOTS (28) ── */
{ n:'ChatGPT',          cat:'AI Chatbots',    e:'🤖', url:'https://chat.openai.com',      p:'freemium', tags:['popular','freemium'], d:'Most popular AI chatbot by OpenAI' },
{ n:'Claude',           cat:'AI Chatbots',    e:'🤖', url:'https://claude.ai',            p:'freemium', tags:['popular','freemium'], d:'Anthropic\'s safe & powerful AI' },
{ n:'Gemini',           cat:'AI Chatbots',    e:'🤖', url:'https://gemini.google.com',    p:'freemium', tags:['free','popular'],    d:'Google\'s multimodal AI assistant' },
{ n:'Perplexity AI',    cat:'AI Chatbots',    e:'🤖', url:'https://perplexity.ai',        p:'freemium', tags:['free','search'],     d:'AI-powered answer engine with sources' },
{ n:'Microsoft Copilot',cat:'AI Chatbots',    e:'🤖', url:'https://copilot.microsoft.com',p:'free',     tags:['free','popular'],    d:'Microsoft\'s AI powered by GPT-4' },
{ n:'Grok',             cat:'AI Chatbots',    e:'🤖', url:'https://grok.x.ai',            p:'freemium', tags:['freemium'],          d:'xAI\'s witty assistant by Elon Musk' },
{ n:'Meta AI',          cat:'AI Chatbots',    e:'🤖', url:'https://meta.ai',              p:'free',     tags:['free'],              d:'Meta\'s Llama-powered free AI' },
{ n:'Mistral Le Chat',  cat:'AI Chatbots',    e:'🤖', url:'https://chat.mistral.ai',      p:'free',     tags:['free'],              d:'Fast European AI by Mistral' },
{ n:'You.com',          cat:'AI Chatbots',    e:'🤖', url:'https://you.com',              p:'freemium', tags:['free'],              d:'AI search + chat in one place' },
{ n:'Poe by Quora',     cat:'AI Chatbots',    e:'🤖', url:'https://poe.com',              p:'freemium', tags:['freemium'],          d:'Access multiple AI models in one app' },
{ n:'HuggingChat',      cat:'AI Chatbots',    e:'🤖', url:'https://huggingface.co/chat',  p:'free',     tags:['free','open'],       d:'Open-source AI chatbots by HuggingFace' },
{ n:'Pi AI',            cat:'AI Chatbots',    e:'🤖', url:'https://pi.ai',                p:'free',     tags:['free'],              d:'Personal AI companion by Inflection' },
{ n:'Phind',            cat:'AI Chatbots',    e:'🤖', url:'https://phind.com',            p:'free',     tags:['free','coding'],     d:'AI search engine for developers' },
{ n:'Kagi Assistant',   cat:'AI Chatbots',    e:'🤖', url:'https://kagi.com',             p:'paid',     tags:['paid'],              d:'Privacy-first AI search assistant' },
{ n:'OpenRouter',       cat:'AI Chatbots',    e:'🤖', url:'https://openrouter.ai',        p:'freemium', tags:['freemium'],          d:'Unified API for all major LLMs' },
{ n:'Groq',             cat:'AI Chatbots',    e:'🤖', url:'https://groq.com',             p:'free',     tags:['free','fast'],       d:'Ultra-fast LLM inference' },
{ n:'Together AI',      cat:'AI Chatbots',    e:'🤖', url:'https://together.ai',          p:'freemium', tags:['freemium'],          d:'Run open-source LLMs via API' },
{ n:'DeepSeek Chat',    cat:'AI Chatbots',    e:'🤖', url:'https://chat.deepseek.com',    p:'free',     tags:['free'],              d:'Powerful Chinese open-source AI' },
{ n:'Character.AI',     cat:'AI Chatbots',    e:'🤖', url:'https://character.ai',         p:'freemium', tags:['freemium','fun'],    d:'Chat with AI characters & personas' },
{ n:'Replika',          cat:'AI Chatbots',    e:'🤖', url:'https://replika.com',          p:'freemium', tags:['freemium'],          d:'Your personal AI companion' },
{ n:'Jasper Chat',      cat:'AI Chatbots',    e:'🤖', url:'https://jasper.ai',            p:'paid',     tags:['paid','marketing'],  d:'AI chat optimized for marketing teams' },
{ n:'Cohere Coral',     cat:'AI Chatbots',    e:'🤖', url:'https://cohere.com',           p:'freemium', tags:['freemium'],          d:'Enterprise-grade AI assistant' },
{ n:'Inflection Pi',    cat:'AI Chatbots',    e:'🤖', url:'https://pi.ai',                p:'free',     tags:['free'],              d:'Empathetic personal AI' },
{ n:'Andi Search',      cat:'AI Chatbots',    e:'🤖', url:'https://andisearch.com',       p:'free',     tags:['free','search'],     d:'Generative AI search engine' },
{ n:'Forefront AI',     cat:'AI Chatbots',    e:'🤖', url:'https://forefront.ai',         p:'freemium', tags:['freemium'],          d:'Custom AI assistants & personas' },
{ n:'Quora Poe',        cat:'AI Chatbots',    e:'🤖', url:'https://poe.com',              p:'freemium', tags:['freemium'],          d:'Multiple AI models in one platform' },
{ n:'Chatsonic',        cat:'AI Chatbots',    e:'🤖', url:'https://writesonic.com/chat',  p:'freemium', tags:['freemium'],          d:'GPT-4 powered with real-time data' },
{ n:'ZeroGPT',          cat:'AI Chatbots',    e:'🤖', url:'https://zerogpt.com',          p:'free',     tags:['free'],              d:'AI content detector & chatbot' },

/* ── 2. IMAGE GENERATION (30) ── */
{ n:'Midjourney',       cat:'Image Gen',      e:'🎨', url:'https://midjourney.com',       p:'paid',     tags:['paid','popular'],    d:'Best quality AI image generation' },
{ n:'DALL·E 3',         cat:'Image Gen',      e:'🎨', url:'https://openai.com/dall-e-3',  p:'freemium', tags:['freemium'],          d:'OpenAI\'s advanced image generator' },
{ n:'Adobe Firefly',    cat:'Image Gen',      e:'🎨', url:'https://firefly.adobe.com',    p:'freemium', tags:['freemium'],          d:'Commercial-safe AI images by Adobe' },
{ n:'Ideogram AI',      cat:'Image Gen',      e:'🎨', url:'https://ideogram.ai',          p:'freemium', tags:['free','popular'],    d:'Best AI for text in images' },
{ n:'Leonardo AI',      cat:'Image Gen',      e:'🎨', url:'https://leonardo.ai',          p:'freemium', tags:['freemium','popular'],d:'Game asset & art generation' },
{ n:'Stable Diffusion', cat:'Image Gen',      e:'🎨', url:'https://stability.ai',         p:'free',     tags:['free','open'],       d:'Open-source image AI model' },
{ n:'Bing Image Creator',cat:'Image Gen',     e:'🎨', url:'https://bing.com/images/create',p:'free',    tags:['free'],              d:'DALL·E powered, 100% free' },
{ n:'Runway Gen-3',     cat:'Image Gen',      e:'🎨', url:'https://runwayml.com',         p:'freemium', tags:['freemium'],          d:'AI image + video generation' },
{ n:'NightCafe',        cat:'Image Gen',      e:'🎨', url:'https://creator.nightcafe.studio',p:'freemium',tags:['freemium'],        d:'Creative AI art community' },
{ n:'Playground AI',    cat:'Image Gen',      e:'🎨', url:'https://playground.ai',        p:'freemium', tags:['free'],              d:'Free AI image playground' },
{ n:'Dreamstudio',      cat:'Image Gen',      e:'🎨', url:'https://dreamstudio.ai',       p:'freemium', tags:['freemium'],          d:'Official Stable Diffusion studio' },
{ n:'Artbreeder',       cat:'Image Gen',      e:'🎨', url:'https://artbreeder.com',       p:'freemium', tags:['freemium'],          d:'Blend & evolve AI images' },
{ n:'Craiyon',          cat:'Image Gen',      e:'🎨', url:'https://craiyon.com',          p:'free',     tags:['free'],              d:'Free unlimited AI art generation' },
{ n:'Lexica Aperture',  cat:'Image Gen',      e:'🎨', url:'https://lexica.art',           p:'freemium', tags:['freemium'],          d:'Stable Diffusion search + generate' },
{ n:'CF Spark',         cat:'Image Gen',      e:'🎨', url:'https://creativeflow.io',      p:'freemium', tags:['freemium'],          d:'Creative Fabrica\'s AI image gen' },
{ n:'Mage.space',       cat:'Image Gen',      e:'🎨', url:'https://mage.space',           p:'freemium', tags:['freemium'],          d:'Fast free Stable Diffusion' },
{ n:'SeaArt AI',        cat:'Image Gen',      e:'🎨', url:'https://seaart.ai',            p:'freemium', tags:['freemium'],          d:'Anime & artwork AI generator' },
{ n:'Tensor.art',       cat:'Image Gen',      e:'🎨', url:'https://tensor.art',           p:'free',     tags:['free'],              d:'Community models for free' },
{ n:'Dezgo',            cat:'Image Gen',      e:'🎨', url:'https://dezgo.com',            p:'free',     tags:['free'],              d:'Free text-to-image generator' },
{ n:'Pollinations',     cat:'Image Gen',      e:'🎨', url:'https://pollinations.ai',      p:'free',     tags:['free','open'],       d:'100% free open-source image API' },
{ n:'Fotor AI',         cat:'Image Gen',      e:'🎨', url:'https://fotor.com',            p:'freemium', tags:['freemium'],          d:'AI photo editor + image gen' },
{ n:'Picsart AI',       cat:'Image Gen',      e:'🎨', url:'https://picsart.com',          p:'freemium', tags:['freemium'],          d:'Creative platform with AI tools' },
{ n:'Remove.bg',        cat:'Image Gen',      e:'🎨', url:'https://remove.bg',            p:'freemium', tags:['freemium'],          d:'AI background remover' },
{ n:'ClipDrop',         cat:'Image Gen',      e:'🎨', url:'https://clipdrop.co',          p:'freemium', tags:['freemium'],          d:'AI photo editing suite by Stability' },
{ n:'Deep Dream Generator',cat:'Image Gen',   e:'🎨', url:'https://deepdreamgenerator.com',p:'freemium',tags:['freemium'],          d:'Neural art style transfer' },
{ n:'Wombo Dream',      cat:'Image Gen',      e:'🎨', url:'https://dream.ai',             p:'freemium', tags:['freemium'],          d:'Artistic AI image generation' },
{ n:'StarryAI',         cat:'Image Gen',      e:'🎨', url:'https://starryai.com',         p:'freemium', tags:['freemium'],          d:'NFT & art focused AI generator' },
{ n:'BlueWillow',       cat:'Image Gen',      e:'🎨', url:'https://bluewillow.ai',        p:'free',     tags:['free'],              d:'Free Midjourney alternative' },
{ n:'Adobe Retype',     cat:'Image Gen',      e:'🎨', url:'https://retype.adobe.com',     p:'free',     tags:['free'],              d:'Match fonts from images with AI' },
{ n:'Canva AI Images',  cat:'Image Gen',      e:'🎨', url:'https://canva.com',            p:'freemium', tags:['freemium','popular'],d:'AI image gen inside Canva' },

/* ── 3. CODING AI (28) ── */
{ n:'GitHub Copilot',   cat:'Coding AI',      e:'💻', url:'https://github.com/features/copilot',p:'freemium',tags:['student','popular'],d:'AI pair programmer by GitHub' },
{ n:'Cursor',           cat:'Coding AI',      e:'💻', url:'https://cursor.sh',            p:'freemium', tags:['freemium','popular'],d:'AI-first code editor' },
{ n:'Replit AI',        cat:'Coding AI',      e:'💻', url:'https://replit.com',           p:'freemium', tags:['freemium'],          d:'Code, build & deploy with AI' },
{ n:'Tabnine',          cat:'Coding AI',      e:'💻', url:'https://tabnine.com',          p:'freemium', tags:['freemium'],          d:'AI code completion for any IDE' },
{ n:'Amazon CodeWhisperer',cat:'Coding AI',   e:'💻', url:'https://aws.amazon.com/codewhisperer',p:'free',tags:['free'],             d:'Free AI coding by Amazon' },
{ n:'Codeium',          cat:'Coding AI',      e:'💻', url:'https://codeium.com',          p:'free',     tags:['free'],              d:'Free AI code completion' },
{ n:'Sourcegraph Cody', cat:'Coding AI',      e:'💻', url:'https://sourcegraph.com/cody', p:'freemium', tags:['freemium'],          d:'AI code assistant for large codebases' },
{ n:'Blackbox AI',      cat:'Coding AI',      e:'💻', url:'https://blackbox.ai',          p:'freemium', tags:['freemium'],          d:'Code search + AI completion' },
{ n:'AskCodi',          cat:'Coding AI',      e:'💻', url:'https://askcodi.com',          p:'freemium', tags:['freemium'],          d:'AI coding assistant & explainer' },
{ n:'Bolt.new',         cat:'Coding AI',      e:'💻', url:'https://bolt.new',             p:'freemium', tags:['freemium','popular'],d:'Full-stack AI app builder' },
{ n:'v0.dev',           cat:'Coding AI',      e:'💻', url:'https://v0.dev',               p:'freemium', tags:['freemium'],          d:'AI UI component generator by Vercel' },
{ n:'Lovable',          cat:'Coding AI',      e:'💻', url:'https://lovable.dev',          p:'freemium', tags:['freemium'],          d:'AI builds full-stack apps' },
{ n:'Continue.dev',     cat:'Coding AI',      e:'💻', url:'https://continue.dev',         p:'free',     tags:['free','open'],       d:'Open-source AI code assistant' },
{ n:'Devin AI',         cat:'Coding AI',      e:'💻', url:'https://cognition.ai',         p:'paid',     tags:['paid'],              d:'World\'s first AI software engineer' },
{ n:'Supermaven',       cat:'Coding AI',      e:'💻', url:'https://supermaven.com',       p:'freemium', tags:['freemium'],          d:'Fastest AI code completion' },
{ n:'CodeGeeX',         cat:'Coding AI',      e:'💻', url:'https://codegeex.cn',          p:'free',     tags:['free'],              d:'Free multilingual code AI' },
{ n:'Aider',            cat:'Coding AI',      e:'💻', url:'https://aider.chat',           p:'free',     tags:['free','open'],       d:'AI pair programming in terminal' },
{ n:'Bito AI',          cat:'Coding AI',      e:'💻', url:'https://bito.ai',              p:'freemium', tags:['freemium'],          d:'10x faster coding with AI' },
{ n:'Pieces for Devs',  cat:'Coding AI',      e:'💻', url:'https://pieces.app',           p:'free',     tags:['free'],              d:'AI code snippets & workflow' },
{ n:'Phind Developer',  cat:'Coding AI',      e:'💻', url:'https://phind.com',            p:'freemium', tags:['freemium'],          d:'AI search engine for developers' },
{ n:'JetBrains AI',     cat:'Coding AI',      e:'💻', url:'https://jetbrains.com/ai',     p:'paid',     tags:['paid'],              d:'AI assistant in JetBrains IDEs' },
{ n:'Zed Editor',       cat:'Coding AI',      e:'💻', url:'https://zed.dev',              p:'free',     tags:['free'],              d:'Fast AI-native code editor' },
{ n:'Windsurf IDE',     cat:'Coding AI',      e:'💻', url:'https://codeium.com/windsurf', p:'freemium', tags:['freemium'],          d:'AI-powered IDE by Codeium' },
{ n:'Trae AI',          cat:'Coding AI',      e:'💻', url:'https://trae.ai',              p:'free',     tags:['free'],              d:'ByteDance AI coding assistant' },
{ n:'Claude Code',      cat:'Coding AI',      e:'💻', url:'https://claude.ai',            p:'paid',     tags:['paid'],              d:'Anthropic\'s agentic coding CLI' },
{ n:'SWE-agent',        cat:'Coding AI',      e:'💻', url:'https://swe-agent.com',        p:'free',     tags:['free','open'],       d:'Open-source AI software engineer' },
{ n:'OpenHands',        cat:'Coding AI',      e:'💻', url:'https://github.com/All-Hands-AI',p:'free',   tags:['free','open'],       d:'Open-source AI dev agent' },
{ n:'Cosine Genie',     cat:'Coding AI',      e:'💻', url:'https://cosine.sh',            p:'freemium', tags:['freemium'],          d:'AI understands your entire codebase' },

/* ── 4. WRITING AI (28) ── */
{ n:'Grammarly',        cat:'Writing AI',     e:'📝', url:'https://grammarly.com',        p:'freemium', tags:['free','popular'],    d:'AI grammar, style & tone checker' },
{ n:'Notion AI',        cat:'Writing AI',     e:'📝', url:'https://notion.so',            p:'paid',     tags:['paid','popular'],    d:'AI writing inside Notion workspace' },
{ n:'Copy.ai',          cat:'Writing AI',     e:'📝', url:'https://copy.ai',              p:'freemium', tags:['freemium'],          d:'AI marketing copy generator' },
{ n:'Writesonic',       cat:'Writing AI',     e:'📝', url:'https://writesonic.com',       p:'freemium', tags:['freemium'],          d:'AI writer for blogs & ads' },
{ n:'Jasper AI',        cat:'Writing AI',     e:'📝', url:'https://jasper.ai',            p:'paid',     tags:['paid','marketing'],  d:'Enterprise AI writing platform' },
{ n:'Rytr',             cat:'Writing AI',     e:'📝', url:'https://rytr.me',              p:'freemium', tags:['freemium','free'],   d:'Affordable AI writer for all' },
{ n:'QuillBot',         cat:'Writing AI',     e:'📝', url:'https://quillbot.com',         p:'freemium', tags:['freemium'],          d:'AI paraphrasing & summarization' },
{ n:'Wordtune',         cat:'Writing AI',     e:'📝', url:'https://wordtune.com',         p:'freemium', tags:['freemium'],          d:'Rewrite & improve any sentence' },
{ n:'ProWritingAid',    cat:'Writing AI',     e:'📝', url:'https://prowritingaid.com',    p:'freemium', tags:['freemium'],          d:'Deep grammar & style analyzer' },
{ n:'Hemingway Editor', cat:'Writing AI',     e:'📝', url:'https://hemingwayapp.com',     p:'freemium', tags:['freemium'],          d:'Make writing bold & clear' },
{ n:'Sudowrite',        cat:'Writing AI',     e:'📝', url:'https://sudowrite.com',        p:'paid',     tags:['paid'],              d:'AI creative writing co-pilot' },
{ n:'Hypotenuse AI',    cat:'Writing AI',     e:'📝', url:'https://hypotenuse.ai',        p:'paid',     tags:['paid'],              d:'AI content for ecommerce' },
{ n:'Anyword',          cat:'Writing AI',     e:'📝', url:'https://anyword.com',          p:'freemium', tags:['freemium'],          d:'Predictive performance scoring AI' },
{ n:'Simplified',       cat:'Writing AI',     e:'📝', url:'https://simplified.com',       p:'freemium', tags:['freemium'],          d:'All-in-one AI content creation' },
{ n:'Cohesive AI',      cat:'Writing AI',     e:'📝', url:'https://cohesive.so',          p:'freemium', tags:['freemium'],          d:'AI content editor & creator' },
{ n:'Longshot AI',      cat:'Writing AI',     e:'📝', url:'https://longshot.ai',          p:'freemium', tags:['freemium'],          d:'Factually accurate long-form AI' },
{ n:'Scalenut',         cat:'Writing AI',     e:'📝', url:'https://scalenut.com',         p:'freemium', tags:['freemium'],          d:'SEO content planning & writing' },
{ n:'Frase.io',         cat:'Writing AI',     e:'📝', url:'https://frase.io',             p:'freemium', tags:['freemium'],          d:'Research-backed AI content writing' },
{ n:'Writecream',       cat:'Writing AI',     e:'📝', url:'https://writecream.com',       p:'freemium', tags:['freemium'],          d:'AI icebreakers & personalized content' },
{ n:'Typeface',         cat:'Writing AI',     e:'📝', url:'https://typeface.ai',          p:'paid',     tags:['paid'],              d:'Brand-consistent AI content' },
{ n:'Lex.page',         cat:'Writing AI',     e:'📝', url:'https://lex.page',             p:'freemium', tags:['freemium'],          d:'AI-powered Google Docs alternative' },
{ n:'Peppertype',       cat:'Writing AI',     e:'📝', url:'https://peppertype.ai',        p:'freemium', tags:['freemium'],          d:'Fast AI content generation' },
{ n:'Copysmith',        cat:'Writing AI',     e:'📝', url:'https://copysmith.ai',         p:'paid',     tags:['paid'],              d:'Enterprise AI copy at scale' },
{ n:'Closers Copy',     cat:'Writing AI',     e:'📝', url:'https://closerscopy.com',      p:'paid',     tags:['paid'],              d:'AI sales & persuasive copy' },
{ n:'ContentBot',       cat:'Writing AI',     e:'📝', url:'https://contentbot.ai',        p:'freemium', tags:['freemium'],          d:'Automated content marketing AI' },
{ n:'Describely',       cat:'Writing AI',     e:'📝', url:'https://describely.ai',        p:'freemium', tags:['freemium'],          d:'AI product descriptions for ecommerce' },
{ n:'Mark Copy AI',     cat:'Writing AI',     e:'📝', url:'https://markcopy.ai',          p:'freemium', tags:['freemium'],          d:'AI brand-aligned content creation' },
{ n:'Copymatic',        cat:'Writing AI',     e:'📝', url:'https://copymatic.ai',         p:'freemium', tags:['freemium'],          d:'AI copywriting & blogging tool' },

/* ── 5. VIDEO AI (26) ── */
{ n:'Runway Gen-3',     cat:'Video AI',       e:'🎬', url:'https://runwayml.com',         p:'freemium', tags:['freemium','popular'],d:'State-of-the-art AI video generation' },
{ n:'Pika Labs',        cat:'Video AI',       e:'🎬', url:'https://pika.art',             p:'freemium', tags:['freemium'],          d:'Text & image to video AI' },
{ n:'Sora',             cat:'Video AI',       e:'🎬', url:'https://openai.com/sora',      p:'freemium', tags:['freemium'],          d:'OpenAI\'s cinematic video AI' },
{ n:'CapCut AI',        cat:'Video AI',       e:'🎬', url:'https://capcut.com',           p:'freemium', tags:['free','popular'],    d:'AI video editor with auto features' },
{ n:'Descript',         cat:'Video AI',       e:'🎬', url:'https://descript.com',         p:'freemium', tags:['freemium'],          d:'Edit video by editing text' },
{ n:'InVideo AI',       cat:'Video AI',       e:'🎬', url:'https://invideo.io',           p:'freemium', tags:['freemium'],          d:'AI video creation from prompts' },
{ n:'Synthesia',        cat:'Video AI',       e:'🎬', url:'https://synthesia.io',         p:'paid',     tags:['paid'],              d:'AI avatar video creation' },
{ n:'HeyGen',           cat:'Video AI',       e:'🎬', url:'https://heygen.com',           p:'freemium', tags:['freemium'],          d:'AI video with talking avatars' },
{ n:'D-ID',             cat:'Video AI',       e:'🎬', url:'https://d-id.com',             p:'freemium', tags:['freemium'],          d:'Animate still photos with AI' },
{ n:'Lumen5',           cat:'Video AI',       e:'🎬', url:'https://lumen5.com',           p:'freemium', tags:['freemium'],          d:'Blog-to-video AI converter' },
{ n:'Pictory AI',       cat:'Video AI',       e:'🎬', url:'https://pictory.ai',           p:'paid',     tags:['paid'],              d:'Long-form to short video AI' },
{ n:'Fliki AI',         cat:'Video AI',       e:'🎬', url:'https://fliki.ai',             p:'freemium', tags:['freemium'],          d:'Text to video with voice' },
{ n:'Steve AI',         cat:'Video AI',       e:'🎬', url:'https://steve.ai',             p:'freemium', tags:['freemium'],          d:'Animation + live video creation' },
{ n:'Elai.io',          cat:'Video AI',       e:'🎬', url:'https://elai.io',              p:'freemium', tags:['freemium'],          d:'Business video with AI presenters' },
{ n:'Colossyan',        cat:'Video AI',       e:'🎬', url:'https://colossyan.com',        p:'paid',     tags:['paid'],              d:'AI actor video for learning' },
{ n:'Veed.io',          cat:'Video AI',       e:'🎬', url:'https://veed.io',              p:'freemium', tags:['freemium'],          d:'Online AI video editor' },
{ n:'Opus Clip',        cat:'Video AI',       e:'🎬', url:'https://opus.pro',             p:'freemium', tags:['freemium'],          d:'Repurpose long videos to shorts' },
{ n:'Munch',            cat:'Video AI',       e:'🎬', url:'https://munch.com',            p:'freemium', tags:['freemium'],          d:'AI clip extraction from long videos' },
{ n:'Klap',             cat:'Video AI',       e:'🎬', url:'https://klap.app',             p:'freemium', tags:['freemium'],          d:'Auto-generate TikTok clips' },
{ n:'Vidyo.ai',         cat:'Video AI',       e:'🎬', url:'https://vidyo.ai',             p:'freemium', tags:['freemium'],          d:'AI short-form video creator' },
{ n:'Captions App',     cat:'Video AI',       e:'🎬', url:'https://captions.ai',          p:'freemium', tags:['freemium'],          d:'AI captions & avatar videos' },
{ n:'Wisecut',          cat:'Video AI',       e:'🎬', url:'https://wisecut.video',        p:'freemium', tags:['freemium'],          d:'Auto-cut silences with AI' },
{ n:'Animoto',          cat:'Video AI',       e:'🎬', url:'https://animoto.com',          p:'freemium', tags:['freemium'],          d:'Slideshow video maker with AI' },
{ n:'Wonder Studio',    cat:'Video AI',       e:'🎬', url:'https://wonderdynamics.com',   p:'freemium', tags:['freemium'],          d:'AI animate CG characters in footage' },
{ n:'Kling AI',         cat:'Video AI',       e:'🎬', url:'https://klingai.com',          p:'freemium', tags:['freemium'],          d:'High-quality video generation AI' },
{ n:'LTX Studio',       cat:'Video AI',       e:'🎬', url:'https://ltx.studio',           p:'freemium', tags:['freemium'],          d:'Full film production with AI' },

/* ── 6. AUDIO & MUSIC AI (24) ── */
{ n:'ElevenLabs',       cat:'Audio & Music',  e:'🎵', url:'https://elevenlabs.io',        p:'freemium', tags:['freemium','popular'],d:'Most realistic AI voice cloning' },
{ n:'Suno AI',          cat:'Audio & Music',  e:'🎵', url:'https://suno.com',             p:'freemium', tags:['freemium','popular'],d:'Create full songs with AI' },
{ n:'Udio',             cat:'Audio & Music',  e:'🎵', url:'https://udio.com',             p:'freemium', tags:['freemium'],          d:'AI music generation from prompts' },
{ n:'Murf AI',          cat:'Audio & Music',  e:'🎵', url:'https://murf.ai',              p:'freemium', tags:['freemium'],          d:'Studio-quality AI voiceovers' },
{ n:'Speechify',        cat:'Audio & Music',  e:'🎵', url:'https://speechify.com',        p:'freemium', tags:['freemium'],          d:'Text-to-speech AI reader' },
{ n:'Play.ht',          cat:'Audio & Music',  e:'🎵', url:'https://play.ht',              p:'freemium', tags:['freemium'],          d:'Ultra-realistic AI voices' },
{ n:'AIVA',             cat:'Audio & Music',  e:'🎵', url:'https://aiva.ai',              p:'freemium', tags:['freemium'],          d:'AI classical & film score composer' },
{ n:'Soundraw',         cat:'Audio & Music',  e:'🎵', url:'https://soundraw.io',          p:'freemium', tags:['freemium'],          d:'Royalty-free AI music generation' },
{ n:'Boomy',            cat:'Audio & Music',  e:'🎵', url:'https://boomy.com',            p:'freemium', tags:['freemium'],          d:'Publish AI-made music & earn' },
{ n:'Beatoven AI',      cat:'Audio & Music',  e:'🎵', url:'https://beatoven.ai',          p:'freemium', tags:['freemium'],          d:'Mood-based royalty-free music AI' },
{ n:'Loudly',           cat:'Audio & Music',  e:'🎵', url:'https://loudly.com',           p:'freemium', tags:['freemium'],          d:'AI music for content creators' },
{ n:'Adobe Podcast',    cat:'Audio & Music',  e:'🎵', url:'https://podcast.adobe.com',    p:'free',     tags:['free'],              d:'AI audio enhance & transcribe' },
{ n:'Krisp',            cat:'Audio & Music',  e:'🎵', url:'https://krisp.ai',             p:'freemium', tags:['freemium'],          d:'AI background noise cancellation' },
{ n:'Cleanvoice',       cat:'Audio & Music',  e:'🎵', url:'https://cleanvoice.ai',        p:'freemium', tags:['freemium'],          d:'Remove filler words from podcasts' },
{ n:'Podcastle',        cat:'Audio & Music',  e:'🎵', url:'https://podcastle.ai',         p:'freemium', tags:['freemium'],          d:'AI podcast recording & editing' },
{ n:'Resemble AI',      cat:'Audio & Music',  e:'🎵', url:'https://resemble.ai',          p:'freemium', tags:['freemium'],          d:'Custom AI voice creation' },
{ n:'Wellsaid Labs',    cat:'Audio & Music',  e:'🎵', url:'https://wellsaidlabs.com',     p:'paid',     tags:['paid'],              d:'Professional AI voice studio' },
{ n:'Replica Studios',  cat:'Audio & Music',  e:'🎵', url:'https://replicastudios.com',   p:'freemium', tags:['freemium'],          d:'AI voice actors for games & films' },
{ n:'Voicemod',         cat:'Audio & Music',  e:'🎵', url:'https://voicemod.net',         p:'freemium', tags:['freemium'],          d:'Real-time AI voice changer' },
{ n:'Moises App',       cat:'Audio & Music',  e:'🎵', url:'https://moises.ai',            p:'freemium', tags:['freemium'],          d:'Separate vocals & instruments with AI' },
{ n:'Auphonic',         cat:'Audio & Music',  e:'🎵', url:'https://auphonic.com',         p:'freemium', tags:['freemium'],          d:'AI audio post-production' },
{ n:'LANDR',            cat:'Audio & Music',  e:'🎵', url:'https://landr.com',            p:'freemium', tags:['freemium'],          d:'AI mastering for musicians' },
{ n:'Vocal Remover',    cat:'Audio & Music',  e:'🎵', url:'https://vocalremover.org',     p:'free',     tags:['free'],              d:'Free AI vocal separator' },
{ n:'Splice AI',        cat:'Audio & Music',  e:'🎵', url:'https://splice.com',           p:'freemium', tags:['freemium'],          d:'AI samples & stem separation' },

/* ── 7. DESIGN TOOLS (26) ── */
{ n:'Canva',            cat:'Design Tools',   e:'🖌️', url:'https://canva.com',            p:'freemium', tags:['free','popular'],    d:'Design anything with AI assistance' },
{ n:'Figma AI',         cat:'Design Tools',   e:'🖌️', url:'https://figma.com',            p:'freemium', tags:['freemium','popular'],d:'AI-powered collaborative design' },
{ n:'Adobe Express',    cat:'Design Tools',   e:'🖌️', url:'https://express.adobe.com',    p:'freemium', tags:['freemium'],          d:'Quick graphic design with Adobe AI' },
{ n:'Microsoft Designer',cat:'Design Tools',  e:'🖌️', url:'https://designer.microsoft.com',p:'free',    tags:['free'],              d:'AI graphic design by Microsoft' },
{ n:'Looka',            cat:'Design Tools',   e:'🖌️', url:'https://looka.com',            p:'paid',     tags:['paid'],              d:'AI logo and brand design' },
{ n:'Brandmark',        cat:'Design Tools',   e:'🖌️', url:'https://brandmark.io',         p:'paid',     tags:['paid'],              d:'AI-powered logo maker' },
{ n:'Uizard',           cat:'Design Tools',   e:'🖌️', url:'https://uizard.io',            p:'freemium', tags:['freemium'],          d:'Sketch to UI wireframe with AI' },
{ n:'Visily AI',        cat:'Design Tools',   e:'🖌️', url:'https://visily.ai',            p:'freemium', tags:['freemium'],          d:'AI wireframe & prototype tool' },
{ n:'Galileo AI',       cat:'Design Tools',   e:'🖌️', url:'https://usegalileo.ai',        p:'paid',     tags:['paid'],              d:'Text to Figma UI design' },
{ n:'Framer AI',        cat:'Design Tools',   e:'🖌️', url:'https://framer.com',           p:'freemium', tags:['freemium'],          d:'AI website builder & prototyping' },
{ n:'Webflow AI',       cat:'Design Tools',   e:'🖌️', url:'https://webflow.com',          p:'freemium', tags:['freemium'],          d:'Visual web design with AI' },
{ n:'Relume AI',        cat:'Design Tools',   e:'🖌️', url:'https://relume.io',            p:'freemium', tags:['freemium'],          d:'AI website sitemap & wireframe' },
{ n:'Khroma',           cat:'Design Tools',   e:'🖌️', url:'https://khroma.co',            p:'free',     tags:['free'],              d:'AI color palette generator' },
{ n:'Coolors',          cat:'Design Tools',   e:'🖌️', url:'https://coolors.co',           p:'freemium', tags:['freemium'],          d:'AI color scheme generator' },
{ n:'ColorMagic',       cat:'Design Tools',   e:'🖌️', url:'https://colormagic.app',       p:'free',     tags:['free'],              d:'AI color palette from keywords' },
{ n:'Magician (Figma)', cat:'Design Tools',   e:'🖌️', url:'https://magician.design',      p:'freemium', tags:['freemium'],          d:'AI design plugin for Figma' },
{ n:'Smartmockups',     cat:'Design Tools',   e:'🖌️', url:'https://smartmockups.com',     p:'freemium', tags:['freemium'],          d:'AI product mockup generator' },
{ n:'Placeit',          cat:'Design Tools',   e:'🖌️', url:'https://placeit.net',          p:'freemium', tags:['freemium'],          d:'Mockups & logo animations' },
{ n:'Spline AI',        cat:'Design Tools',   e:'🖌️', url:'https://spline.design',        p:'freemium', tags:['freemium'],          d:'3D design tool with AI features' },
{ n:'Icons8',           cat:'Design Tools',   e:'🖌️', url:'https://icons8.com',           p:'freemium', tags:['freemium'],          d:'AI icons, illustrations & photos' },
{ n:'Hatchful',         cat:'Design Tools',   e:'🖌️', url:'https://hatchful.shopify.com', p:'free',     tags:['free'],              d:'Free AI logo maker by Shopify' },
{ n:'LogoAI',           cat:'Design Tools',   e:'🖌️', url:'https://logoai.com',           p:'freemium', tags:['freemium'],          d:'Generate professional logos with AI' },
{ n:'Tailor Brands',    cat:'Design Tools',   e:'🖌️', url:'https://tailorbrands.com',     p:'paid',     tags:['paid'],              d:'Full brand identity with AI' },
{ n:'Designs.ai',       cat:'Design Tools',   e:'🖌️', url:'https://designs.ai',           p:'paid',     tags:['paid'],              d:'All-in-one AI creative platform' },
{ n:'Zyro AI',          cat:'Design Tools',   e:'🖌️', url:'https://zyro.com',             p:'paid',     tags:['paid'],              d:'AI website builder & heatmap' },
{ n:'Visme',            cat:'Design Tools',   e:'🖌️', url:'https://visme.co',             p:'freemium', tags:['freemium'],          d:'Infographics & presentations with AI' },

/* ── 8. SEO TOOLS (20) ── */
{ n:'Semrush',          cat:'SEO Tools',      e:'📈', url:'https://semrush.com',          p:'freemium', tags:['freemium','popular'],d:'All-in-one SEO & marketing platform' },
{ n:'Ahrefs',           cat:'SEO Tools',      e:'📈', url:'https://ahrefs.com',           p:'freemium', tags:['freemium'],          d:'Backlink analysis & keyword research' },
{ n:'Moz Pro',          cat:'SEO Tools',      e:'📈', url:'https://moz.com',              p:'freemium', tags:['freemium'],          d:'Domain authority & SEO toolkit' },
{ n:'Ubersuggest',      cat:'SEO Tools',      e:'📈', url:'https://neilpatel.com/ubersuggest',p:'freemium',tags:['freemium'],        d:'Free keyword & traffic analysis' },
{ n:'Surfer SEO',       cat:'SEO Tools',      e:'📈', url:'https://surferseo.com',        p:'paid',     tags:['paid'],              d:'Content optimization with NLP' },
{ n:'MarketMuse',       cat:'SEO Tools',      e:'📈', url:'https://marketmuse.com',       p:'freemium', tags:['freemium'],          d:'AI content strategy & planning' },
{ n:'Clearscope',       cat:'SEO Tools',      e:'📈', url:'https://clearscope.io',        p:'paid',     tags:['paid'],              d:'Content optimization platform' },
{ n:'NeuronWriter',     cat:'SEO Tools',      e:'📈', url:'https://neuronwriter.com',     p:'freemium', tags:['freemium'],          d:'NLP-based SEO content editor' },
{ n:'Frase',            cat:'SEO Tools',      e:'📈', url:'https://frase.io',             p:'freemium', tags:['freemium'],          d:'Research & optimize content with AI' },
{ n:'SE Ranking',       cat:'SEO Tools',      e:'📈', url:'https://seranking.com',        p:'freemium', tags:['freemium'],          d:'All-in-one SEO software' },
{ n:'Serpstat',         cat:'SEO Tools',      e:'📈', url:'https://serpstat.com',         p:'freemium', tags:['freemium'],          d:'Growth hacking SEO platform' },
{ n:'RankIQ',           cat:'SEO Tools',      e:'📈', url:'https://rankiq.com',           p:'paid',     tags:['paid'],              d:'AI SEO toolset for bloggers' },
{ n:'WriterZen',        cat:'SEO Tools',      e:'📈', url:'https://writerzen.net',        p:'freemium', tags:['freemium'],          d:'Content workflow with topic discovery' },
{ n:'Alli AI',          cat:'SEO Tools',      e:'📈', url:'https://alliai.com',           p:'paid',     tags:['paid'],              d:'Automate on-page SEO at scale' },
{ n:'KeywordInsights',  cat:'SEO Tools',      e:'📈', url:'https://keywordinsights.ai',   p:'freemium', tags:['freemium'],          d:'AI keyword clustering tool' },
{ n:'SEOwind',          cat:'SEO Tools',      e:'📈', url:'https://seowind.io',           p:'freemium', tags:['freemium'],          d:'AI content briefs & SEO articles' },
{ n:'Outranking',       cat:'SEO Tools',      e:'📈', url:'https://outranking.io',        p:'freemium', tags:['freemium'],          d:'AI SEO content writing & scoring' },
{ n:'Bing Webmaster',   cat:'SEO Tools',      e:'📈', url:'https://bing.com/webmasters',  p:'free',     tags:['free'],              d:'Free SEO tools by Microsoft Bing' },
{ n:'Google Search Console',cat:'SEO Tools',  e:'📈', url:'https://search.google.com/search-console',p:'free',tags:['free'],         d:'Official Google SEO analytics' },
{ n:'Keyword Surfer',   cat:'SEO Tools',      e:'📈', url:'https://surferseo.com',        p:'free',     tags:['free'],              d:'Free Chrome keyword research extension' },

/* ── 9. PRODUCTIVITY (22) ── */
{ n:'Notion AI',        cat:'Productivity',   e:'📊', url:'https://notion.so',            p:'paid',     tags:['paid','popular'],    d:'AI workspace for notes & projects' },
{ n:'ClickUp AI',       cat:'Productivity',   e:'📊', url:'https://clickup.com',          p:'freemium', tags:['freemium','popular'],d:'AI project management & tasks' },
{ n:'Asana AI',         cat:'Productivity',   e:'📊', url:'https://asana.com',            p:'freemium', tags:['freemium'],          d:'Workflow AI for team management' },
{ n:'Monday AI',        cat:'Productivity',   e:'📊', url:'https://monday.com',           p:'freemium', tags:['freemium'],          d:'Work OS with AI automation' },
{ n:'Trello',           cat:'Productivity',   e:'📊', url:'https://trello.com',           p:'freemium', tags:['freemium'],          d:'Kanban boards for task management' },
{ n:'Linear',           cat:'Productivity',   e:'📊', url:'https://linear.app',           p:'freemium', tags:['freemium'],          d:'Fast issue tracking for software teams' },
{ n:'Reclaim AI',       cat:'Productivity',   e:'📊', url:'https://reclaim.ai',           p:'freemium', tags:['freemium'],          d:'AI calendar scheduling assistant' },
{ n:'Motion AI',        cat:'Productivity',   e:'📊', url:'https://usemotion.com',        p:'paid',     tags:['paid'],              d:'AI auto-schedules your tasks' },
{ n:'Taskade AI',       cat:'Productivity',   e:'📊', url:'https://taskade.com',          p:'freemium', tags:['freemium'],          d:'AI task lists & mind maps' },
{ n:'Sunsama',          cat:'Productivity',   e:'📊', url:'https://sunsama.com',          p:'paid',     tags:['paid'],              d:'Daily planning ritual with AI' },
{ n:'Airtable AI',      cat:'Productivity',   e:'📊', url:'https://airtable.com',         p:'freemium', tags:['freemium'],          d:'Spreadsheet-database with AI' },
{ n:'Coda AI',          cat:'Productivity',   e:'📊', url:'https://coda.io',              p:'freemium', tags:['freemium'],          d:'Docs + spreadsheets + AI in one' },
{ n:'Fibery AI',        cat:'Productivity',   e:'📊', url:'https://fibery.io',            p:'freemium', tags:['freemium'],          d:'Connected workspace with AI insights' },
{ n:'Obsidian',         cat:'Productivity',   e:'📊', url:'https://obsidian.md',          p:'free',     tags:['free'],              d:'Knowledge base & note-taking app' },
{ n:'Mem AI',           cat:'Productivity',   e:'📊', url:'https://mem.ai',               p:'freemium', tags:['freemium'],          d:'AI-powered personal knowledge mgmt' },
{ n:'Reflect Notes',    cat:'Productivity',   e:'📊', url:'https://reflect.app',          p:'paid',     tags:['paid'],              d:'AI networked note-taking' },
{ n:'Todoist AI',       cat:'Productivity',   e:'📊', url:'https://todoist.com',          p:'freemium', tags:['freemium'],          d:'Smart task management with AI' },
{ n:'Any.do AI',        cat:'Productivity',   e:'📊', url:'https://any.do',               p:'freemium', tags:['freemium'],          d:'AI daily planner & to-do list' },
{ n:'Nifty',            cat:'Productivity',   e:'📊', url:'https://niftypm.com',          p:'freemium', tags:['freemium'],          d:'All-in-one project management' },
{ n:'Timeular',         cat:'Productivity',   e:'📊', url:'https://timeular.com',         p:'freemium', tags:['freemium'],          d:'AI time tracking & analysis' },
{ n:'Wrike AI',         cat:'Productivity',   e:'📊', url:'https://wrike.com',            p:'freemium', tags:['freemium'],          d:'AI project management at scale' },
{ n:'Basecamp',         cat:'Productivity',   e:'📊', url:'https://basecamp.com',         p:'paid',     tags:['paid'],              d:'All-in-one team management tool' },

/* ── 10. PRESENTATION AI (16) ── */
{ n:'Gamma AI',         cat:'Presentation',   e:'🖥️', url:'https://gamma.app',            p:'freemium', tags:['freemium','popular'],d:'AI creates beautiful presentations fast' },
{ n:'Beautiful.ai',     cat:'Presentation',   e:'🖥️', url:'https://beautiful.ai',         p:'freemium', tags:['freemium'],          d:'Smart slide design with AI' },
{ n:'Tome',             cat:'Presentation',   e:'🖥️', url:'https://tome.app',             p:'freemium', tags:['freemium'],          d:'Storytelling-focused AI slides' },
{ n:'Pitch',            cat:'Presentation',   e:'🖥️', url:'https://pitch.com',            p:'freemium', tags:['freemium'],          d:'Collaborative deck creation with AI' },
{ n:'SlidesAI',         cat:'Presentation',   e:'🖥️', url:'https://slidesai.io',          p:'freemium', tags:['freemium'],          d:'Text to Google Slides with AI' },
{ n:'MagicSlides',      cat:'Presentation',   e:'🖥️', url:'https://magicslides.app',      p:'freemium', tags:['freemium'],          d:'Instant AI PowerPoint from text' },
{ n:'Decktopus AI',     cat:'Presentation',   e:'🖥️', url:'https://decktopus.com',        p:'freemium', tags:['freemium'],          d:'One-click AI presentation builder' },
{ n:'Visme AI',         cat:'Presentation',   e:'🖥️', url:'https://visme.co',             p:'freemium', tags:['freemium'],          d:'Data-rich AI presentations' },
{ n:'Prezi AI',         cat:'Presentation',   e:'🖥️', url:'https://prezi.com',            p:'freemium', tags:['freemium'],          d:'Dynamic non-linear AI presentations' },
{ n:'Canva Slides',     cat:'Presentation',   e:'🖥️', url:'https://canva.com',            p:'freemium', tags:['freemium'],          d:'Beautiful AI-powered slide design' },
{ n:'SlidesGo',         cat:'Presentation',   e:'🖥️', url:'https://slidesgo.com',         p:'freemium', tags:['free'],              d:'Free AI presentation templates' },
{ n:'Deckrobot',        cat:'Presentation',   e:'🖥️', url:'https://deckrobot.com',        p:'freemium', tags:['freemium'],          d:'AI slide deck for sales teams' },
{ n:'Simplified Slides',cat:'Presentation',   e:'🖥️', url:'https://simplified.com',       p:'freemium', tags:['freemium'],          d:'AI slides inside Simplified suite' },
{ n:'Plus AI (Slides)', cat:'Presentation',   e:'🖥️', url:'https://plusdocs.com',         p:'freemium', tags:['freemium'],          d:'AI add-on for Google Slides' },
{ n:'Kroma AI',         cat:'Presentation',   e:'🖥️', url:'https://kroma.ai',             p:'freemium', tags:['freemium'],          d:'AI presentation from any URL' },
{ n:'SlideFast',        cat:'Presentation',   e:'🖥️', url:'https://slidefast.io',         p:'freemium', tags:['freemium'],          d:'AI generates slides in seconds' },

/* ── 11. RESEARCH TOOLS (16) ── */
{ n:'Perplexity AI',    cat:'Research',       e:'🔬', url:'https://perplexity.ai',        p:'freemium', tags:['freemium','popular'],d:'AI search with cited sources' },
{ n:'Elicit',           cat:'Research',       e:'🔬', url:'https://elicit.com',           p:'freemium', tags:['freemium'],          d:'AI research assistant for papers' },
{ n:'Consensus AI',     cat:'Research',       e:'🔬', url:'https://consensus.app',        p:'freemium', tags:['freemium'],          d:'Find scientific consensus with AI' },
{ n:'ResearchRabbit',   cat:'Research',       e:'🔬', url:'https://researchrabbit.ai',    p:'free',     tags:['free'],              d:'Discover related research papers' },
{ n:'Connected Papers', cat:'Research',       e:'🔬', url:'https://connectedpapers.com',  p:'freemium', tags:['freemium'],          d:'Visual academic paper graph' },
{ n:'Scite.ai',         cat:'Research',       e:'🔬', url:'https://scite.ai',             p:'freemium', tags:['freemium'],          d:'Smart citations with context' },
{ n:'Iris.ai',          cat:'Research',       e:'🔬', url:'https://iris.ai',              p:'freemium', tags:['freemium'],          d:'AI science workspace' },
{ n:'Scholarcy',        cat:'Research',       e:'🔬', url:'https://scholarcy.com',        p:'freemium', tags:['freemium'],          d:'Summarize research papers with AI' },
{ n:'SciSpace',         cat:'Research',       e:'🔬', url:'https://typeset.io',           p:'freemium', tags:['freemium'],          d:'Chat with any research paper' },
{ n:'ExplainPaper',     cat:'Research',       e:'🔬', url:'https://explainpaper.com',     p:'freemium', tags:['freemium'],          d:'Explain confusing paper sections' },
{ n:'ChatPDF',          cat:'Research',       e:'🔬', url:'https://chatpdf.com',          p:'freemium', tags:['freemium'],          d:'Chat with any PDF document' },
{ n:'Humata AI',        cat:'Research',       e:'🔬', url:'https://humata.ai',            p:'freemium', tags:['freemium'],          d:'Summarize & query long documents' },
{ n:'Semantic Scholar', cat:'Research',       e:'🔬', url:'https://semanticscholar.org',  p:'free',     tags:['free'],              d:'AI-powered scientific search engine' },
{ n:'Litmaps',          cat:'Research',       e:'🔬', url:'https://litmaps.com',          p:'freemium', tags:['freemium'],          d:'Research paper discovery maps' },
{ n:'PaperDigest',      cat:'Research',       e:'🔬', url:'https://paper-digest.com',     p:'free',     tags:['free'],              d:'Daily AI research paper summaries' },
{ n:'Jenni AI',         cat:'Research',       e:'🔬', url:'https://jenni.ai',             p:'freemium', tags:['freemium'],          d:'AI academic writing assistant' },

/* ── 12. ANALYTICS (16) ── */
{ n:'Google Analytics', cat:'Analytics',      e:'📉', url:'https://analytics.google.com', p:'free',     tags:['free','popular'],    d:'Free web analytics by Google' },
{ n:'Mixpanel',         cat:'Analytics',      e:'📉', url:'https://mixpanel.com',         p:'freemium', tags:['freemium'],          d:'Product analytics & user tracking' },
{ n:'Amplitude',        cat:'Analytics',      e:'📉', url:'https://amplitude.com',        p:'freemium', tags:['freemium'],          d:'Digital analytics platform' },
{ n:'Hotjar',           cat:'Analytics',      e:'📉', url:'https://hotjar.com',           p:'freemium', tags:['freemium','popular'],d:'Heatmaps & user session recordings' },
{ n:'Microsoft Clarity', cat:'Analytics',     e:'📉', url:'https://clarity.microsoft.com',p:'free',     tags:['free'],              d:'Free heatmaps & session recordings' },
{ n:'Crazy Egg',        cat:'Analytics',      e:'📉', url:'https://crazyegg.com',         p:'paid',     tags:['paid'],              d:'Visual analytics & A/B testing' },
{ n:'FullStory',        cat:'Analytics',      e:'📉', url:'https://fullstory.com',        p:'freemium', tags:['freemium'],          d:'Digital experience analytics' },
{ n:'PostHog',          cat:'Analytics',      e:'📉', url:'https://posthog.com',          p:'freemium', tags:['free','open'],       d:'Open-source product analytics' },
{ n:'Plausible',        cat:'Analytics',      e:'📉', url:'https://plausible.io',         p:'paid',     tags:['paid'],              d:'Privacy-first Google Analytics alt' },
{ n:'Fathom Analytics', cat:'Analytics',      e:'📉', url:'https://usefathom.com',        p:'paid',     tags:['paid'],              d:'Simple privacy-focused analytics' },
{ n:'Heap Analytics',   cat:'Analytics',      e:'📉', url:'https://heap.io',              p:'freemium', tags:['freemium'],          d:'Auto-capture all user events' },
{ n:'Segment',          cat:'Analytics',      e:'📉', url:'https://segment.com',          p:'freemium', tags:['freemium'],          d:'Customer data platform & CDP' },
{ n:'Matomo',           cat:'Analytics',      e:'📉', url:'https://matomo.org',           p:'freemium', tags:['free','open'],       d:'Privacy-friendly open-source analytics' },
{ n:'Simple Analytics', cat:'Analytics',      e:'📉', url:'https://simpleanalytics.com',  p:'paid',     tags:['paid'],              d:'Clean privacy-first web analytics' },
{ n:'Woopra',           cat:'Analytics',      e:'📉', url:'https://woopra.com',           p:'freemium', tags:['freemium'],          d:'Customer journey analytics' },
{ n:'Smartlook',        cat:'Analytics',      e:'📉', url:'https://smartlook.com',        p:'freemium', tags:['freemium'],          d:'Qualitative analytics & recordings' },

/* ── 13. SOCIAL MEDIA (18) ── */
{ n:'Buffer',           cat:'Social Media',   e:'📱', url:'https://buffer.com',           p:'freemium', tags:['free','popular'],    d:'Simple social media scheduling' },
{ n:'Hootsuite',        cat:'Social Media',   e:'📱', url:'https://hootsuite.com',        p:'freemium', tags:['freemium'],          d:'All-in-one social media management' },
{ n:'Later',            cat:'Social Media',   e:'📱', url:'https://later.com',            p:'freemium', tags:['freemium'],          d:'Visual Instagram scheduler' },
{ n:'Sprout Social',    cat:'Social Media',   e:'📱', url:'https://sproutsocial.com',     p:'paid',     tags:['paid'],              d:'Enterprise social media platform' },
{ n:'SocialBee',        cat:'Social Media',   e:'📱', url:'https://socialbee.com',        p:'paid',     tags:['paid'],              d:'AI social posting & recycling' },
{ n:'Metricool',        cat:'Social Media',   e:'📱', url:'https://metricool.com',        p:'freemium', tags:['freemium'],          d:'Analytics + scheduling for social' },
{ n:'Publer',           cat:'Social Media',   e:'📱', url:'https://publer.io',            p:'freemium', tags:['freemium'],          d:'AI post scheduling & analytics' },
{ n:'ContentStudio',    cat:'Social Media',   e:'📱', url:'https://contentstudio.io',     p:'freemium', tags:['freemium'],          d:'AI content discovery & scheduling' },
{ n:'Missinglettr',     cat:'Social Media',   e:'📱', url:'https://missinglettr.com',     p:'freemium', tags:['freemium'],          d:'Auto drip campaigns from blog posts' },
{ n:'Tailwind',         cat:'Social Media',   e:'📱', url:'https://tailwindapp.com',      p:'freemium', tags:['freemium'],          d:'Pinterest & Instagram scheduler' },
{ n:'CoSchedule',       cat:'Social Media',   e:'📱', url:'https://coschedule.com',       p:'freemium', tags:['freemium'],          d:'Marketing calendar & AI writer' },
{ n:'Loomly',           cat:'Social Media',   e:'📱', url:'https://loomly.com',           p:'paid',     tags:['paid'],              d:'Brand success platform' },
{ n:'Sendible',         cat:'Social Media',   e:'📱', url:'https://sendible.com',         p:'paid',     tags:['paid'],              d:'Agency social media management' },
{ n:'Agorapulse',       cat:'Social Media',   e:'📱', url:'https://agorapulse.com',       p:'freemium', tags:['freemium'],          d:'Full social media ROI tracking' },
{ n:'Planoly',          cat:'Social Media',   e:'📱', url:'https://planoly.com',          p:'freemium', tags:['freemium'],          d:'Visual Instagram & Pinterest planner' },
{ n:'Pallyy',           cat:'Social Media',   e:'📱', url:'https://pallyy.com',           p:'freemium', tags:['freemium'],          d:'Affordable social media scheduling' },
{ n:'Crowdfire',        cat:'Social Media',   e:'📱', url:'https://crowdfireapp.com',     p:'freemium', tags:['freemium'],          d:'Smart social media & content curation' },
{ n:'Iconosquare',      cat:'Social Media',   e:'📱', url:'https://iconosquare.com',      p:'paid',     tags:['paid'],              d:'Instagram & Facebook advanced analytics' },

/* ── 14. NO-CODE TOOLS (18) ── */
{ n:'Bubble',           cat:'No-Code',        e:'⚙️', url:'https://bubble.io',            p:'freemium', tags:['freemium','popular'],d:'Build web apps without code' },
{ n:'Webflow',          cat:'No-Code',        e:'⚙️', url:'https://webflow.com',          p:'freemium', tags:['freemium'],          d:'Visual website development platform' },
{ n:'Wix ADI',          cat:'No-Code',        e:'⚙️', url:'https://wix.com',              p:'freemium', tags:['freemium'],          d:'AI-designed websites in minutes' },
{ n:'Squarespace',      cat:'No-Code',        e:'⚙️', url:'https://squarespace.com',      p:'paid',     tags:['paid'],              d:'Beautiful AI website builder' },
{ n:'Carrd',            cat:'No-Code',        e:'⚙️', url:'https://carrd.co',             p:'freemium', tags:['freemium'],          d:'Simple one-page websites for free' },
{ n:'Glide',            cat:'No-Code',        e:'⚙️', url:'https://glideapps.com',        p:'freemium', tags:['freemium'],          d:'Apps from Google Sheets with AI' },
{ n:'Adalo',            cat:'No-Code',        e:'⚙️', url:'https://adalo.com',            p:'freemium', tags:['freemium'],          d:'Build mobile apps without code' },
{ n:'Thunkable',        cat:'No-Code',        e:'⚙️', url:'https://thunkable.com',        p:'freemium', tags:['freemium','student'],d:'Cross-platform no-code mobile apps' },
{ n:'FlutterFlow',      cat:'No-Code',        e:'⚙️', url:'https://flutterflow.io',       p:'freemium', tags:['freemium'],          d:'Visual Flutter app builder' },
{ n:'Retool',           cat:'No-Code',        e:'⚙️', url:'https://retool.com',           p:'freemium', tags:['freemium'],          d:'Build internal tools fast' },
{ n:'Softr',            cat:'No-Code',        e:'⚙️', url:'https://softr.io',             p:'freemium', tags:['freemium'],          d:'Airtable to web apps & portals' },
{ n:'WeWeb',            cat:'No-Code',        e:'⚙️', url:'https://weweb.io',             p:'freemium', tags:['freemium'],          d:'Frontend builder for any backend' },
{ n:'Plasmic',          cat:'No-Code',        e:'⚙️', url:'https://plasmic.app',          p:'freemium', tags:['freemium'],          d:'Visual builder for React apps' },
{ n:'Bravo Studio',     cat:'No-Code',        e:'⚙️', url:'https://bravostudio.app',      p:'freemium', tags:['freemium'],          d:'Figma to native mobile app' },
{ n:'AppGyver',         cat:'No-Code',        e:'⚙️', url:'https://appgyver.com',         p:'free',     tags:['free'],              d:'Free professional app builder by SAP' },
{ n:'Noodl',            cat:'No-Code',        e:'⚙️', url:'https://noodl.net',            p:'freemium', tags:['freemium'],          d:'Low-code app development platform' },
{ n:'Superblocks',      cat:'No-Code',        e:'⚙️', url:'https://superblocks.com',      p:'freemium', tags:['freemium'],          d:'AI internal tools builder' },
{ n:'Stacker',          cat:'No-Code',        e:'⚙️', url:'https://stacker.app',          p:'freemium', tags:['freemium'],          d:'Turn spreadsheets into business apps' },

/* ── 15. EDUCATION AI (16) ── */
{ n:'Khan Academy AI',  cat:'Education AI',   e:'🎓', url:'https://khanacademy.org',      p:'free',     tags:['free','popular'],    d:'Free world-class AI education' },
{ n:'Duolingo Max',     cat:'Education AI',   e:'🎓', url:'https://duolingo.com',         p:'freemium', tags:['freemium'],          d:'AI language learning gamification' },
{ n:'Khanmigo',         cat:'Education AI',   e:'🎓', url:'https://khanacademy.org/khan-labs',p:'paid', tags:['paid'],              d:'GPT-4 powered Khan Academy tutor' },
{ n:'Socratic by Google',cat:'Education AI',  e:'🎓', url:'https://socratic.org',         p:'free',     tags:['free'],              d:'Photo-to-answer homework helper' },
{ n:'Photomath',        cat:'Education AI',   e:'🎓', url:'https://photomath.com',        p:'freemium', tags:['freemium'],          d:'Scan & solve math problems with AI' },
{ n:'Wolfram Alpha',    cat:'Education AI',   e:'🎓', url:'https://wolframalpha.com',     p:'freemium', tags:['freemium'],          d:'Computational knowledge engine' },
{ n:'Quizlet AI',       cat:'Education AI',   e:'🎓', url:'https://quizlet.com',          p:'freemium', tags:['freemium'],          d:'AI-powered flashcards & studying' },
{ n:'Brainly',          cat:'Education AI',   e:'🎓', url:'https://brainly.com',          p:'freemium', tags:['freemium'],          d:'AI homework help community' },
{ n:'Coursera AI',      cat:'Education AI',   e:'🎓', url:'https://coursera.org',         p:'freemium', tags:['freemium'],          d:'Online courses from top universities' },
{ n:'Chegg AI',         cat:'Education AI',   e:'🎓', url:'https://chegg.com',            p:'paid',     tags:['paid'],              d:'AI homework & textbook solutions' },
{ n:'Gradescope',       cat:'Education AI',   e:'🎓', url:'https://gradescope.com',       p:'freemium', tags:['freemium'],          d:'AI grading for educators' },
{ n:'TeachFX',          cat:'Education AI',   e:'🎓', url:'https://teachfx.com',          p:'freemium', tags:['freemium'],          d:'AI coach for teachers' },
{ n:'Knowji',           cat:'Education AI',   e:'🎓', url:'https://knowji.com',           p:'freemium', tags:['freemium'],          d:'AI vocabulary learning apps' },
{ n:'Numerade',         cat:'Education AI',   e:'🎓', url:'https://numerade.com',         p:'freemium', tags:['freemium'],          d:'AI STEM video solution library' },
{ n:'Explain Everything',cat:'Education AI',  e:'🎓', url:'https://explaineverything.com',p:'freemium', tags:['freemium'],          d:'Interactive whiteboard with AI' },
{ n:'Ello Reading AI',  cat:'Education AI',   e:'🎓', url:'https://helloello.com',        p:'freemium', tags:['freemium'],          d:'AI reading coach for children' },

/* ── 16. CUSTOMER SUPPORT AI (14) ── */
{ n:'Intercom AI',      cat:'Customer Support',e:'🎧', url:'https://intercom.com',        p:'paid',     tags:['paid'],              d:'AI Fin chatbot for support' },
{ n:'Zendesk AI',       cat:'Customer Support',e:'🎧', url:'https://zendesk.com',         p:'paid',     tags:['paid'],              d:'AI-powered customer service platform' },
{ n:'Freshdesk AI',     cat:'Customer Support',e:'🎧', url:'https://freshdesk.com',       p:'freemium', tags:['freemium'],          d:'Freddy AI for customer support' },
{ n:'Tidio',            cat:'Customer Support',e:'🎧', url:'https://tidio.com',           p:'freemium', tags:['freemium'],          d:'AI chatbot for small businesses' },
{ n:'Drift',            cat:'Customer Support',e:'🎧', url:'https://drift.com',           p:'paid',     tags:['paid'],              d:'Conversational AI sales platform' },
{ n:'Chatfuel',         cat:'Customer Support',e:'🎧', url:'https://chatfuel.com',        p:'freemium', tags:['freemium'],          d:'AI chatbots for Facebook & Instagram' },
{ n:'ManyChat',         cat:'Customer Support',e:'🎧', url:'https://manychat.com',        p:'freemium', tags:['freemium'],          d:'Chat marketing automation AI' },
{ n:'Landbot AI',       cat:'Customer Support',e:'🎧', url:'https://landbot.io',          p:'freemium', tags:['freemium'],          d:'No-code AI chatbot builder' },
{ n:'Voiceflow',        cat:'Customer Support',e:'🎧', url:'https://voiceflow.com',       p:'freemium', tags:['freemium'],          d:'Design & deploy AI chat agents' },
{ n:'Botpress',         cat:'Customer Support',e:'🎧', url:'https://botpress.com',        p:'freemium', tags:['freemium','open'],   d:'Open-source AI chatbot platform' },
{ n:'Kommunicate',      cat:'Customer Support',e:'🎧', url:'https://kommunicate.io',      p:'freemium', tags:['freemium'],          d:'AI chatbot + human handoff' },
{ n:'Dialpad AI',       cat:'Customer Support',e:'🎧', url:'https://dialpad.com',         p:'paid',     tags:['paid'],              d:'AI-powered business communications' },
{ n:'Kore.ai',          cat:'Customer Support',e:'🎧', url:'https://kore.ai',             p:'freemium', tags:['freemium'],          d:'Enterprise AI chatbot platform' },
{ n:'Ada AI',           cat:'Customer Support',e:'🎧', url:'https://ada.cx',              p:'paid',     tags:['paid'],              d:'Automated customer service AI' },

/* ── 17. STOCK IMAGES & MEDIA (14) ── */
{ n:'Unsplash',         cat:'Stock Images',   e:'🖼️', url:'https://unsplash.com',         p:'free',     tags:['free','popular'],    d:'Millions of free high-res photos' },
{ n:'Pexels',           cat:'Stock Images',   e:'🖼️', url:'https://pexels.com',           p:'free',     tags:['free'],              d:'Free stock photos & videos' },
{ n:'Pixabay',          cat:'Stock Images',   e:'🖼️', url:'https://pixabay.com',          p:'free',     tags:['free'],              d:'Free images, videos & music' },
{ n:'Freepik',          cat:'Stock Images',   e:'🖼️', url:'https://freepik.com',          p:'freemium', tags:['freemium'],          d:'Vectors, photos & AI-generated assets' },
{ n:'Flaticon',         cat:'Stock Images',   e:'🖼️', url:'https://flaticon.com',         p:'freemium', tags:['freemium'],          d:'Millions of free icons & stickers' },
{ n:'Icons8',           cat:'Stock Images',   e:'🖼️', url:'https://icons8.com',           p:'freemium', tags:['freemium'],          d:'Icons, illustrations & AI-generated photos' },
{ n:'Iconfinder',       cat:'Stock Images',   e:'🖼️', url:'https://iconfinder.com',       p:'freemium', tags:['freemium'],          d:'Premium & free icon library' },
{ n:'StockSnap.io',     cat:'Stock Images',   e:'🖼️', url:'https://stocksnap.io',         p:'free',     tags:['free'],              d:'CC0 licensed stock photography' },
{ n:'Reshot',           cat:'Stock Images',   e:'🖼️', url:'https://reshot.com',           p:'free',     tags:['free'],              d:'Unique free stock photos & icons' },
{ n:'Burst by Shopify', cat:'Stock Images',   e:'🖼️', url:'https://burst.shopify.com',    p:'free',     tags:['free'],              d:'Free stock photos for entrepreneurs' },
{ n:'Moose Photos',     cat:'Stock Images',   e:'🖼️', url:'https://photos.icons8.com',    p:'freemium', tags:['freemium'],          d:'Consistent-style human stock photos' },
{ n:'Lifeofpix',        cat:'Stock Images',   e:'🖼️', url:'https://lifeofpix.com',        p:'free',     tags:['free'],              d:'High-res free photography' },
{ n:'Gratisography',    cat:'Stock Images',   e:'🖼️', url:'https://gratisography.com',    p:'free',     tags:['free'],              d:'Quirky unique free stock photos' },
{ n:'Picjumbo',         cat:'Stock Images',   e:'🖼️', url:'https://picjumbo.com',         p:'freemium', tags:['freemium'],          d:'Free stock photos for commercial use' },

/* ── 18. EMAIL MARKETING (14) ── */
{ n:'Mailchimp AI',     cat:'Email Marketing',e:'📧', url:'https://mailchimp.com',        p:'freemium', tags:['free','popular'],    d:'Email marketing with AI predictions' },
{ n:'Brevo (Sendinblue)',cat:'Email Marketing',e:'📧', url:'https://brevo.com',            p:'freemium', tags:['freemium'],          d:'Email, SMS & chat marketing' },
{ n:'ConvertKit',       cat:'Email Marketing',e:'📧', url:'https://convertkit.com',       p:'freemium', tags:['freemium'],          d:'Creator-focused email platform' },
{ n:'GetResponse',      cat:'Email Marketing',e:'📧', url:'https://getresponse.com',      p:'freemium', tags:['freemium'],          d:'Email automation + landing pages' },
{ n:'Klaviyo',          cat:'Email Marketing',e:'📧', url:'https://klaviyo.com',          p:'freemium', tags:['freemium'],          d:'AI email for ecommerce brands' },
{ n:'Moosend',          cat:'Email Marketing',e:'📧', url:'https://moosend.com',          p:'freemium', tags:['freemium'],          d:'Affordable AI email automation' },
{ n:'Mailjet',          cat:'Email Marketing',e:'📧', url:'https://mailjet.com',          p:'freemium', tags:['freemium'],          d:'Collaborative email platform' },
{ n:'EmailOctopus',     cat:'Email Marketing',e:'📧', url:'https://emailoctopus.com',     p:'freemium', tags:['freemium'],          d:'Affordable email marketing' },
{ n:'ActiveCampaign',   cat:'Email Marketing',e:'📧', url:'https://activecampaign.com',   p:'paid',     tags:['paid'],              d:'CRM + email automation platform' },
{ n:'Drip',             cat:'Email Marketing',e:'📧', url:'https://drip.com',             p:'paid',     tags:['paid'],              d:'Ecommerce CRM with email AI' },
{ n:'Omnisend',         cat:'Email Marketing',e:'📧', url:'https://omnisend.com',         p:'freemium', tags:['freemium'],          d:'Omnichannel email for ecommerce' },
{ n:'Campaign Monitor', cat:'Email Marketing',e:'📧', url:'https://campaignmonitor.com',  p:'paid',     tags:['paid'],              d:'Beautiful email marketing campaigns' },
{ n:'Benchmark Email',  cat:'Email Marketing',e:'📧', url:'https://benchmarkemail.com',   p:'freemium', tags:['freemium'],          d:'AI-powered email design & automation' },
{ n:'Loops',            cat:'Email Marketing',e:'📧', url:'https://loops.so',             p:'freemium', tags:['freemium'],          d:'Modern email for SaaS companies' },

/* ── 19. TRANSLATION AI (12) ── */
{ n:'DeepL',            cat:'Translation',    e:'🌐', url:'https://deepl.com',            p:'freemium', tags:['freemium','popular'],d:'Most accurate AI translator' },
{ n:'Google Translate',  cat:'Translation',   e:'🌐', url:'https://translate.google.com', p:'free',     tags:['free','popular'],    d:'100+ languages free translation' },
{ n:'Microsoft Translator',cat:'Translation', e:'🌐', url:'https://translator.microsoft.com',p:'free',  tags:['free'],              d:'Real-time multilingual translation' },
{ n:'Papago',           cat:'Translation',    e:'🌐', url:'https://papago.naver.com',     p:'free',     tags:['free'],              d:'Naver\'s accurate Asian language AI' },
{ n:'Reverso',          cat:'Translation',    e:'🌐', url:'https://reverso.net',          p:'freemium', tags:['freemium'],          d:'Contextual translation & learning' },
{ n:'Linguee',          cat:'Translation',    e:'🌐', url:'https://linguee.com',          p:'free',     tags:['free'],              d:'Context-rich translation dictionary' },
{ n:'iTranslate',       cat:'Translation',    e:'🌐', url:'https://itranslate.com',       p:'freemium', tags:['freemium'],          d:'Voice & text translation app' },
{ n:'Smartling',        cat:'Translation',    e:'🌐', url:'https://smartling.com',        p:'paid',     tags:['paid'],              d:'Enterprise AI translation platform' },
{ n:'Lilt',             cat:'Translation',    e:'🌐', url:'https://lilt.com',             p:'paid',     tags:['paid'],              d:'Human + AI translation at scale' },
{ n:'Unbabel',          cat:'Translation',    e:'🌐', url:'https://unbabel.com',          p:'paid',     tags:['paid'],              d:'Quality translation for enterprises' },
{ n:'Lokalise',         cat:'Translation',    e:'🌐', url:'https://lokalise.com',         p:'freemium', tags:['freemium'],          d:'AI translation management platform' },
{ n:'Phrase',           cat:'Translation',    e:'🌐', url:'https://phrase.com',           p:'paid',     tags:['paid'],              d:'Localization platform with AI' },

/* ── 20. CYBERSECURITY TOOLS (14) ── */
{ n:'Malwarebytes',     cat:'Cybersecurity',  e:'🔒', url:'https://malwarebytes.com',     p:'freemium', tags:['freemium'],          d:'AI-powered malware detection' },
{ n:'Bitwarden',        cat:'Cybersecurity',  e:'🔒', url:'https://bitwarden.com',        p:'freemium', tags:['free','open'],       d:'Open-source password manager' },
{ n:'1Password',        cat:'Cybersecurity',  e:'🔒', url:'https://1password.com',        p:'freemium', tags:['freemium'],          d:'Premium password & secrets manager' },
{ n:'Have I Been Pwned',cat:'Cybersecurity',  e:'🔒', url:'https://haveibeenpwned.com',   p:'free',     tags:['free'],              d:'Check if your data was breached' },
{ n:'VirusTotal',       cat:'Cybersecurity',  e:'🔒', url:'https://virustotal.com',       p:'free',     tags:['free'],              d:'Scan files & URLs for malware' },
{ n:'Shodan',           cat:'Cybersecurity',  e:'🔒', url:'https://shodan.io',            p:'freemium', tags:['freemium'],          d:'Search engine for internet devices' },
{ n:'Proton VPN',       cat:'Cybersecurity',  e:'🔒', url:'https://protonvpn.com',        p:'freemium', tags:['free'],              d:'Free & secure open-source VPN' },
{ n:'CrowdStrike',      cat:'Cybersecurity',  e:'🔒', url:'https://crowdstrike.com',      p:'paid',     tags:['paid'],              d:'AI-powered endpoint security' },
{ n:'Darktrace',        cat:'Cybersecurity',  e:'🔒', url:'https://darktrace.com',        p:'paid',     tags:['paid'],              d:'Self-learning AI cybersecurity' },
{ n:'Snyk',             cat:'Cybersecurity',  e:'🔒', url:'https://snyk.io',              p:'freemium', tags:['freemium'],          d:'Find & fix code vulnerabilities' },
{ n:'OWASP ZAP',        cat:'Cybersecurity',  e:'🔒', url:'https://zaproxy.org',          p:'free',     tags:['free','open'],       d:'Web app security scanner' },
{ n:'Nmap',             cat:'Cybersecurity',  e:'🔒', url:'https://nmap.org',             p:'free',     tags:['free','open'],       d:'Network discovery & security audit' },
{ n:'Burp Suite',       cat:'Cybersecurity',  e:'🔒', url:'https://portswigger.net',      p:'freemium', tags:['freemium'],          d:'Web vulnerability scanner' },
{ n:'Metasploit',       cat:'Cybersecurity',  e:'🔒', url:'https://metasploit.com',       p:'freemium', tags:['freemium'],          d:'Penetration testing framework' },

/* ── 21. DATA SCIENCE & ML (14) ── */
{ n:'Google Colab',     cat:'Data Science',   e:'🧮', url:'https://colab.research.google.com',p:'free', tags:['free','popular'],    d:'Free GPU Jupyter notebooks by Google' },
{ n:'Kaggle',           cat:'Data Science',   e:'🧮', url:'https://kaggle.com',           p:'free',     tags:['free'],              d:'ML competitions & free datasets' },
{ n:'Hugging Face',     cat:'Data Science',   e:'🧮', url:'https://huggingface.co',       p:'freemium', tags:['freemium'],          d:'GitHub of machine learning models' },
{ n:'DataRobot',        cat:'Data Science',   e:'🧮', url:'https://datarobot.com',        p:'paid',     tags:['paid'],              d:'Enterprise automated ML platform' },
{ n:'H2O.ai',           cat:'Data Science',   e:'🧮', url:'https://h2o.ai',               p:'freemium', tags:['freemium'],          d:'Open-source AutoML platform' },
{ n:'Roboflow',         cat:'Data Science',   e:'🧮', url:'https://roboflow.com',         p:'freemium', tags:['freemium'],          d:'Computer vision dataset & training' },
{ n:'Weights & Biases', cat:'Data Science',   e:'🧮', url:'https://wandb.ai',             p:'freemium', tags:['freemium'],          d:'MLOps & experiment tracking' },
{ n:'MLflow',           cat:'Data Science',   e:'🧮', url:'https://mlflow.org',           p:'free',     tags:['free','open'],       d:'Open-source ML lifecycle platform' },
{ n:'Scale AI',         cat:'Data Science',   e:'🧮', url:'https://scale.com',            p:'paid',     tags:['paid'],              d:'Data labeling for ML training' },
{ n:'Label Studio',     cat:'Data Science',   e:'🧮', url:'https://labelstud.io',         p:'freemium', tags:['free','open'],       d:'Open-source data labeling tool' },
{ n:'Orange Data Mining',cat:'Data Science',  e:'🧮', url:'https://orangedatamining.com', p:'free',     tags:['free','open'],       d:'Visual ML with no coding required' },
{ n:'RapidMiner',       cat:'Data Science',   e:'🧮', url:'https://rapidminer.com',       p:'freemium', tags:['freemium'],          d:'End-to-end data science platform' },
{ n:'KNIME',            cat:'Data Science',   e:'🧮', url:'https://knime.com',            p:'free',     tags:['free'],              d:'Open analytics platform' },
{ n:'Deepnote',         cat:'Data Science',   e:'🧮', url:'https://deepnote.com',         p:'freemium', tags:['freemium'],          d:'Collaborative data science notebooks' },

/* ── 22. SCHEDULING (12) ── */
{ n:'Calendly',         cat:'Scheduling',     e:'📅', url:'https://calendly.com',         p:'freemium', tags:['free','popular'],    d:'Automated meeting scheduling' },
{ n:'Cal.com',          cat:'Scheduling',     e:'📅', url:'https://cal.com',              p:'freemium', tags:['free','open'],       d:'Open-source Calendly alternative' },
{ n:'Doodle',           cat:'Scheduling',     e:'📅', url:'https://doodle.com',           p:'freemium', tags:['freemium'],          d:'Group meeting scheduler' },
{ n:'Acuity Scheduling',cat:'Scheduling',     e:'📅', url:'https://acuityscheduling.com', p:'paid',     tags:['paid'],              d:'Appointment scheduling software' },
{ n:'YouCanBookMe',     cat:'Scheduling',     e:'📅', url:'https://youcanbook.me',        p:'freemium', tags:['freemium'],          d:'Booking page linked to calendar' },
{ n:'Clockwise AI',     cat:'Scheduling',     e:'📅', url:'https://getclockwise.com',     p:'freemium', tags:['freemium'],          d:'AI calendar optimizer for teams' },
{ n:'Reclaim AI',       cat:'Scheduling',     e:'📅', url:'https://reclaim.ai',           p:'freemium', tags:['freemium'],          d:'Smart calendar & task scheduling' },
{ n:'Motion',           cat:'Scheduling',     e:'📅', url:'https://usemotion.com',        p:'paid',     tags:['paid'],              d:'AI builds your perfect daily schedule' },
{ n:'SavvyCal',         cat:'Scheduling',     e:'📅', url:'https://savvycal.com',         p:'freemium', tags:['freemium'],          d:'Scheduling with time zone logic' },
{ n:'Fantastical',      cat:'Scheduling',     e:'📅', url:'https://flexibits.com/fantastical',p:'paid',tags:['paid'],               d:'Natural language AI calendar' },
{ n:'Tidycal',          cat:'Scheduling',     e:'📅', url:'https://tidycal.com',          p:'freemium', tags:['freemium'],          d:'Simple & affordable booking tool' },
{ n:'Appointlet',       cat:'Scheduling',     e:'📅', url:'https://appointlet.com',       p:'freemium', tags:['freemium'],          d:'Meeting scheduler for sales teams' },

/* ── 23. CHART & DATA VIZ (12) ── */
{ n:'Datawrapper',      cat:'Chart Tools',    e:'📊', url:'https://datawrapper.de',       p:'freemium', tags:['freemium'],          d:'Create charts & maps for editorial' },
{ n:'Flourish',         cat:'Chart Tools',    e:'📊', url:'https://flourish.studio',      p:'freemium', tags:['freemium'],          d:'Animated data visualizations' },
{ n:'RAWGraphs',        cat:'Chart Tools',    e:'📊', url:'https://rawgraphs.io',         p:'free',     tags:['free','open'],       d:'Open-source data viz framework' },
{ n:'Tableau Public',   cat:'Chart Tools',    e:'📊', url:'https://public.tableau.com',   p:'free',     tags:['free'],              d:'Free version of Tableau analytics' },
{ n:'Google Data Studio',cat:'Chart Tools',   e:'📊', url:'https://datastudio.google.com',p:'free',    tags:['free'],              d:'Free BI tool by Google' },
{ n:'Infogram',         cat:'Chart Tools',    e:'📊', url:'https://infogram.com',         p:'freemium', tags:['freemium'],          d:'Infographics & interactive charts' },
{ n:'Piktochart',       cat:'Chart Tools',    e:'📊', url:'https://piktochart.com',       p:'freemium', tags:['freemium'],          d:'Infographic & report maker' },
{ n:'Venngage',         cat:'Chart Tools',    e:'📊', url:'https://venngage.com',         p:'freemium', tags:['freemium'],          d:'Infographic design platform' },
{ n:'Canva Charts',     cat:'Chart Tools',    e:'📊', url:'https://canva.com/graphs',     p:'freemium', tags:['freemium'],          d:'Beautiful chart maker inside Canva' },
{ n:'ChartBlocks',      cat:'Chart Tools',    e:'📊', url:'https://chartblocks.com',      p:'freemium', tags:['freemium'],          d:'Build charts from any data source' },
{ n:'Visme Charts',     cat:'Chart Tools',    e:'📊', url:'https://visme.co',             p:'freemium', tags:['freemium'],          d:'Interactive chart & graph creator' },
{ n:'Observable',       cat:'Chart Tools',    e:'📊', url:'https://observablehq.com',     p:'freemium', tags:['freemium'],          d:'Collaborative data visualization notebooks' },

/* ── 24. HASHTAG TOOLS (8) ── */
{ n:'All Hashtag',      cat:'Hashtag Tools',  e:'#️⃣', url:'https://all-hashtag.com',      p:'free',     tags:['free'],              d:'Generate top hashtags for any topic' },
{ n:'RiteTag',          cat:'Hashtag Tools',  e:'#️⃣', url:'https://ritetag.com',          p:'freemium', tags:['freemium'],          d:'Real-time hashtag strength analysis' },
{ n:'TagsFinder',       cat:'Hashtag Tools',  e:'#️⃣', url:'https://tagsfinder.com',       p:'free',     tags:['free'],              d:'Find best tags for Instagram & TikTok' },
{ n:'Hashtagify',       cat:'Hashtag Tools',  e:'#️⃣', url:'https://hashtagify.me',        p:'freemium', tags:['freemium'],          d:'Twitter & Instagram hashtag analytics' },
{ n:'IQ Hashtags',      cat:'Hashtag Tools',  e:'#️⃣', url:'https://iqhashtags.com',       p:'freemium', tags:['freemium'],          d:'Instagram hashtag performance tracker' },
{ n:'Inflact Hashtags', cat:'Hashtag Tools',  e:'#️⃣', url:'https://inflact.com/tools/hashtag-generator',p:'freemium',tags:['freemium'],d:'AI Instagram hashtag generator' },
{ n:'Keyword Tool',     cat:'Hashtag Tools',  e:'#️⃣', url:'https://keywordtool.io',       p:'freemium', tags:['freemium'],          d:'Hashtags from autocomplete data' },
{ n:'Display Purposes', cat:'Hashtag Tools',  e:'#️⃣', url:'https://displaypurposes.com',  p:'free',     tags:['free'],              d:'Smart related hashtag finder' },

/* ── 25. CONTENT IDEAS (10) ── */
{ n:'AnswerThePublic',  cat:'Content Ideas',  e:'🧠', url:'https://answerthepublic.com',  p:'freemium', tags:['freemium'],          d:'Visual keyword & question explorer' },
{ n:'BuzzSumo',         cat:'Content Ideas',  e:'🧠', url:'https://buzzsumo.com',         p:'freemium', tags:['freemium'],          d:'Find trending content & influencers' },
{ n:'SparkToro',        cat:'Content Ideas',  e:'🧠', url:'https://sparktoro.com',        p:'freemium', tags:['freemium'],          d:'Audience research & topic discovery' },
{ n:'Exploding Topics', cat:'Content Ideas',  e:'🧠', url:'https://explodingtopics.com',  p:'freemium', tags:['freemium'],          d:'Trend detection before it goes viral' },
{ n:'Google Trends',    cat:'Content Ideas',  e:'🧠', url:'https://trends.google.com',    p:'free',     tags:['free'],              d:'Real-time trending topic data' },
{ n:'Feedly AI',        cat:'Content Ideas',  e:'🧠', url:'https://feedly.com',           p:'freemium', tags:['freemium'],          d:'AI curated news & content feeds' },
{ n:'ContentStudio AI', cat:'Content Ideas',  e:'🧠', url:'https://contentstudio.io',     p:'freemium', tags:['freemium'],          d:'Discover trending industry content' },
{ n:'Zest.is',          cat:'Content Ideas',  e:'🧠', url:'https://zest.is',              p:'free',     tags:['free'],              d:'Curated marketing content discovery' },
{ n:'Newsletter Hunt',  cat:'Content Ideas',  e:'🧠', url:'https://newsletterhunt.com',   p:'free',     tags:['free'],              d:'Discover best newsletters in any niche' },
{ n:'Treendly',         cat:'Content Ideas',  e:'🧠', url:'https://treendly.com',         p:'freemium', tags:['freemium'],          d:'Spot rising trends in any market' },

/* ── 26. 3D & AR TOOLS (10) ── */
{ n:'Spline AI',        cat:'3D & AR',        e:'🧊', url:'https://spline.design',        p:'freemium', tags:['freemium'],          d:'3D design & animation in browser' },
{ n:'Luma AI',          cat:'3D & AR',        e:'🧊', url:'https://lumalabs.ai',          p:'freemium', tags:['freemium'],          d:'NeRF-based 3D capture with phone' },
{ n:'Kaedim',           cat:'3D & AR',        e:'🧊', url:'https://kaedim3d.com',         p:'paid',     tags:['paid'],              d:'2D image to 3D model with AI' },
{ n:'Masterpiece Studio',cat:'3D & AR',       e:'🧊', url:'https://masterpiecestudio.com',p:'freemium', tags:['freemium'],          d:'VR 3D creation with AI assistance' },
{ n:'Polycam',          cat:'3D & AR',        e:'🧊', url:'https://poly.cam',             p:'freemium', tags:['freemium'],          d:'3D scanning with iPhone LiDAR' },
{ n:'Matterport',       cat:'3D & AR',        e:'🧊', url:'https://matterport.com',       p:'freemium', tags:['freemium'],          d:'3D spatial twins & virtual tours' },
{ n:'NVIDIA Omniverse', cat:'3D & AR',        e:'🧊', url:'https://nvidia.com/omniverse', p:'freemium', tags:['freemium'],          d:'Real-time 3D collaboration platform' },
{ n:'Meshy AI',         cat:'3D & AR',        e:'🧊', url:'https://meshy.ai',             p:'freemium', tags:['freemium'],          d:'Text to 3D model generation' },
{ n:'Shap-e by OpenAI', cat:'3D & AR',        e:'🧊', url:'https://github.com/openai/shap-e',p:'free', tags:['free','open'],       d:'Text to 3D open-source model' },
{ n:'Point-E',          cat:'3D & AR',        e:'🧊', url:'https://github.com/openai/point-e',p:'free', tags:['free','open'],       d:'OpenAI point cloud 3D generation' },

/* ── 27. MARKETING & CRM (12) ── */
{ n:'HubSpot AI',       cat:'Marketing & CRM',e:'📣', url:'https://hubspot.com',          p:'freemium', tags:['freemium','popular'],d:'All-in-one AI CRM & marketing' },
{ n:'Salesforce Einstein',cat:'Marketing & CRM',e:'📣', url:'https://salesforce.com',     p:'paid',     tags:['paid'],              d:'AI-powered CRM by Salesforce' },
{ n:'Marketo',          cat:'Marketing & CRM',e:'📣', url:'https://marketo.com',          p:'paid',     tags:['paid'],              d:'B2B marketing automation' },
{ n:'Pipedrive AI',     cat:'Marketing & CRM',e:'📣', url:'https://pipedrive.com',        p:'freemium', tags:['freemium'],          d:'Visual CRM with AI sales assistant' },
{ n:'Zoho CRM AI',      cat:'Marketing & CRM',e:'📣', url:'https://zoho.com/crm',         p:'freemium', tags:['freemium'],          d:'Zia AI for CRM predictions' },
{ n:'Monday CRM',       cat:'Marketing & CRM',e:'📣', url:'https://monday.com/crm',       p:'freemium', tags:['freemium'],          d:'Visual CRM on monday.com platform' },
{ n:'Freshsales AI',    cat:'Marketing & CRM',e:'📣', url:'https://freshworks.com/crm',   p:'freemium', tags:['freemium'],          d:'Freddy AI-powered sales CRM' },
{ n:'Keap',             cat:'Marketing & CRM',e:'📣', url:'https://keap.com',             p:'paid',     tags:['paid'],              d:'CRM + email automation for SMBs' },
{ n:'Customer.io',      cat:'Marketing & CRM',e:'📣', url:'https://customer.io',          p:'freemium', tags:['freemium'],          d:'Behavioral messaging platform' },
{ n:'Autopilot',        cat:'Marketing & CRM',e:'📣', url:'https://journeys.autopilothq.com',p:'paid',  tags:['paid'],              d:'Visual marketing automation' },
{ n:'Attio',            cat:'Marketing & CRM',e:'📣', url:'https://attio.com',            p:'freemium', tags:['freemium'],          d:'Modern AI-native CRM' },
{ n:'Clay',             cat:'Marketing & CRM',e:'📣', url:'https://clay.com',             p:'freemium', tags:['freemium'],          d:'AI enrichment for sales outreach' },

/* ── 28. FINANCE & BUSINESS (10) ── */
{ n:'Quicken',          cat:'Finance',        e:'💰', url:'https://quicken.com',          p:'paid',     tags:['paid'],              d:'Personal finance & investment tracker' },
{ n:'YNAB',             cat:'Finance',        e:'💰', url:'https://ynab.com',             p:'paid',     tags:['paid'],              d:'Zero-based AI budgeting tool' },
{ n:'Cleo AI',          cat:'Finance',        e:'💰', url:'https://meetcleo.com',         p:'freemium', tags:['freemium'],          d:'AI financial coach & budgeting' },
{ n:'Copilot Money',    cat:'Finance',        e:'💰', url:'https://copilot.money',        p:'paid',     tags:['paid'],              d:'AI personal finance manager' },
{ n:'Tiller Money',     cat:'Finance',        e:'💰', url:'https://tillerhq.com',         p:'paid',     tags:['paid'],              d:'Automated budget spreadsheets' },
{ n:'Betterment',       cat:'Finance',        e:'💰', url:'https://betterment.com',       p:'paid',     tags:['paid'],              d:'AI robo-advisor for investing' },
{ n:'Monarch Money',    cat:'Finance',        e:'💰', url:'https://monarchmoney.com',     p:'paid',     tags:['paid'],              d:'Modern AI household finance tracker' },
{ n:'Digits',           cat:'Finance',        e:'💰', url:'https://digits.com',           p:'paid',     tags:['paid'],              d:'AI bookkeeping for small business' },
{ n:'Ramp',             cat:'Finance',        e:'💰', url:'https://ramp.com',             p:'freemium', tags:['freemium'],          d:'AI corporate cards & expense mgmt' },
{ n:'Brex AI',          cat:'Finance',        e:'💰', url:'https://brex.com',             p:'freemium', tags:['freemium'],          d:'AI business banking & payments' },
];

/* ── CATEGORIES CONFIG ── */
const CAT_CONFIG = {
  'AI Chatbots':     { e:'🤖', color:'#00d4ff' },
  'Image Gen':       { e:'🎨', color:'#ec4899' },
  'Coding AI':       { e:'💻', color:'#7c3aed' },
  'Writing AI':      { e:'📝', color:'#10b981' },
  'Video AI':        { e:'🎬', color:'#f59e0b' },
  'Audio & Music':   { e:'🎵', color:'#8b5cf6' },
  'Design Tools':    { e:'🖌️', color:'#06b6d4' },
  'SEO Tools':       { e:'📈', color:'#84cc16' },
  'Productivity':    { e:'📊', color:'#fb923c' },
  'Presentation':    { e:'🖥️', color:'#e879f9' },
  'Research':        { e:'🔬', color:'#38bdf8' },
  'Analytics':       { e:'📉', color:'#4ade80' },
  'Social Media':    { e:'📱', color:'#f472b6' },
  'No-Code':         { e:'⚙️', color:'#a78bfa' },
  'Education AI':    { e:'🎓', color:'#34d399' },
  'Customer Support':{ e:'🎧', color:'#fbbf24' },
  'Stock Images':    { e:'🖼️', color:'#60a5fa' },
  'Email Marketing': { e:'📧', color:'#f87171' },
  'Translation':     { e:'🌐', color:'#2dd4bf' },
  'Cybersecurity':   { e:'🔒', color:'#00d4ff' },
  'Data Science':    { e:'🧮', color:'#818cf8' },
  'Scheduling':      { e:'📅', color:'#fb7185' },
  'Chart Tools':     { e:'📊', color:'#a3e635' },
  'Hashtag Tools':   { e:'#️⃣', color:'#94a3b8' },
  'Content Ideas':   { e:'🧠', color:'#fcd34d' },
  '3D & AR':         { e:'🧊', color:'#67e8f9' },
  'Marketing & CRM': { e:'📣', color:'#f9a8d4' },
  'Finance':         { e:'💰', color:'#86efac' },
};

const ALL_CATS = ['All', ...Object.keys(CAT_CONFIG)];

let activeCat   = 'All';
let activePrice = 'all';
let finderReady = false;

/* ── RENDER FINDER ── */
window.renderFinder = function() {
  if (finderReady) { filterAI(); return; }
  finderReady = true;

  // Category chips
  const catScroll = document.getElementById('catScroll');
  catScroll.innerHTML = ALL_CATS.map(c => `
    <button class="cat-chip${c === 'All' ? ' active' : ''}"
      onclick="setCat('${c}')" data-cat="${c}">
      ${c === 'All' ? '🌐 All' : (CAT_CONFIG[c]?.e || '') + ' ' + c}
    </button>
  `).join('');

  filterAI();

  // Update counters
  const total   = AI_TOOLS.length;
  const cats    = Object.keys(CAT_CONFIG).length;
  const freeCnt = AI_TOOLS.filter(t => t.p === 'free' || t.tags.includes('free')).length;
  if (window.startCounters) startCounters(total, cats, freeCnt);
};

window.setCat = function(c) {
  activeCat = c;
  document.querySelectorAll('.cat-chip').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === c);
  });
  filterAI();
};

window.setPriceFilter = function(btn, price) {
  activePrice = price;
  document.querySelectorAll('.price-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filterAI();
};

window.clearSearch = function() {
  document.getElementById('aiSearch').value = '';
  document.getElementById('searchClear').style.display = 'none';
  filterAI();
};

window.filterAI = function() {
  const q = (document.getElementById('aiSearch')?.value || '').toLowerCase().trim();
  const clearBtn = document.getElementById('searchClear');
  if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';

  const filtered = AI_TOOLS.filter(t => {
    const matchCat   = activeCat === 'All' || t.cat === activeCat;
    const matchPrice = activePrice === 'all' || t.p === activePrice || t.tags.includes(activePrice);
    const matchQ     = !q ||
      t.n.toLowerCase().includes(q) ||
      t.cat.toLowerCase().includes(q) ||
      t.d.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.includes(q));
    return matchCat && matchPrice && matchQ;
  });

  // Meta
  document.getElementById('finderMeta').innerHTML =
    `Showing <em>${filtered.length}</em> of ${AI_TOOLS.length} tools` +
    (q ? ` for "<em>${q}</em>"` : '');

  if (!filtered.length) {
    document.getElementById('finderBody').innerHTML = `
      <div class="no-results">
        <span class="no-results-icon">🔍</span>
        No tools found. Try different keywords.
      </div>`;
    return;
  }

  // Group
  const grouped = {};
  filtered.forEach(t => {
    if (!grouped[t.cat]) grouped[t.cat] = [];
    grouped[t.cat].push(t);
  });

  document.getElementById('finderBody').innerHTML =
    Object.entries(grouped).map(([cat, tools], si) => `
      <div class="cat-section" style="animation-delay:${si * 0.04}s">
        <div class="cat-hdr">
          <span class="cat-hdr-emoji">${CAT_CONFIG[cat]?.e || '🔧'}</span>
          <span class="cat-hdr-name">${cat}</span>
          <span class="cat-hdr-count">${tools.length}</span>
        </div>
        <div class="tools-grid-ai">
          ${tools.map((t, i) => `
            <a class="ai-card" href="${t.url}" target="_blank" rel="noopener"
               style="animation-delay:${(si * 0.04 + i * 0.02)}s">
              <div class="ai-card-top">
                <span class="ai-card-name">${t.n}</span>
                <span class="ai-card-arrow">↗</span>
              </div>
              <div class="ai-card-desc">${t.d}</div>
              <div class="ai-card-tags">
                <span class="tag-pill tp-${t.p}">${t.p}</span>
                ${t.tags.includes('popular') ? '<span class="tag-pill tp-popular">popular</span>' : ''}
                ${t.tags.includes('open') ? '<span class="tag-pill tp-open">open-source</span>' : ''}
                ${t.tags.includes('student') ? '<span class="tag-pill tp-student">student</span>' : ''}
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    `).join('');
};

/* ── INIT COUNTERS ON HOME LOAD ── */
document.addEventListener('DOMContentLoaded', () => {
  const total   = AI_TOOLS.length;
  const cats    = Object.keys(CAT_CONFIG).length;
  const freeCnt = AI_TOOLS.filter(t => t.p === 'free' || t.tags.includes('free')).length;
  if (window.startCounters) startCounters(total, cats, freeCnt);
});

// Override tool card to include bookmark
const _origFilterAI = window.filterAI;
window.filterAI = function() {
  _origFilterAI();
  // Add bookmark buttons to all ai-cards
  document.querySelectorAll('.ai-card').forEach((card, i) => {
    const tool = (() => {
      const q = (document.getElementById('aiSearch')?.value||'').toLowerCase();
      const filtered = AI_TOOLS.filter(t=>{
        const matchCat=activeCat==='All'||t.cat===activeCat;
        const matchPrice=activePrice==='all'||t.p===activePrice||t.tags.includes(activePrice);
        const matchQ=!q||t.n.toLowerCase().includes(q)||t.cat.toLowerCase().includes(q)||t.d.toLowerCase().includes(q);
        return matchCat&&matchPrice&&matchQ;
      });
      return filtered[i];
    })();
    if(!tool) return;
    const btn=document.createElement('button');
    btn.className='ai-bm-btn';
    btn.title='Bookmark';
    btn.innerHTML='⭐';
    btn.onclick=(e)=>{e.preventDefault();e.stopPropagation();bookmarkTool(tool);};
    card.appendChild(btn);
  });
};
