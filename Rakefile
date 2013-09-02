# == Dependencies ==============================================================

require 'rake'
require 'rbconfig'

# == Configuration =============================================================

# Language encoding
LANG = "sv_SV.UTF-8"

# Check OS and set commands
if RbConfig::CONFIG["host_os"] =~ /mswin|mingw|windows/
  OPEN = "start"
else
  OPEN = "xdg-open"
end

# Default address
ADDRESS = "http://localhost:4000/"

# Transfer settings
ROBOCOPY = "_site/ D:/Git/gummesson.github.com/ /e"
RSYNC = "-av _site/ ~/Git/gummesson.github.com/"

# Default Git message
GITMSG = "Update"

# Set "rake build" as default
task :default => [:build]

# == Helpers ===================================================================

# Execute a system command
def execute(command)
  system "#{command}"
end

# == Tasks =====================================================================

# rake build
desc "Build the site (and convert Sass to CSS)"
task :build do
  Rake::Task["build:sass"].invoke
  Rake::Task["build:js"].invoke
  execute("chcp 65001 && jekyll build")
  Rake::Task["build:html"].invoke
end

# build tasks (sass, js and html)
namespace :build do
  task :sass do
    execute("compass compile")
  end

  task :js do
    puts "Compressing the JS file..."
    FileUtils.cp_r("assets/js/src/global.js", "assets/js/global.js")
    Dir.chdir("assets/js") do
      execute("uglifyjs global.js --compress --mangle --output global.js")
    end
  end

  # rake html
  task :html do
    puts "Compressing some HTML files..."
    Dir["_site/blog/tag/**/*.html"].each do |file|
      html = File.read(file)
      comp = html.gsub(/^\s+$/,"")
      File.write(file, comp)
    end
  end
end

# rake watch
# rake watch[num]
desc "Build and watch the site (with post limit)"
task :watch, :number do |t, args|
  number = args[:number]
  Rake::Task["build:sass"].invoke
  Rake::Task["build:js"].invoke
  if number.nil? or number.empty?
    execute("chcp 65001 && jekyll build --watch")
  else
    execute("chcp 65001 && jekyll build --watch --limit_posts #{number}")
  end
end

# rake preview (ugly Windows hack...)
desc "Launch a preview of the site in the browser"
task :preview do
  sleep 2
  execute("#{OPEN} #{ADDRESS}")
  Dir.chdir("_site/") do
    execute("nws -p 4000")
  end
end

# rake transfer[command]
desc "Transfer the _site directory to it's local git repository"
task :transfer, :command do |t, args|
  command = args[:command]
  if command.nil? or command.empty?
    raise "Please choose a file transfer command."
  elsif command == "robocopy"
    Rake::Task[:build].invoke
    execute("robocopy #{ROBOCOPY}")
    puts "The _site directory was transfered."
  elsif command == "rsync"
    Rake::Task[:build].invoke
    execute("rsync #{RSYNC}")
    puts "The _site directory was transfered."
  else
    raise "#{command} isn't a valid file transfer command."
  end
end

# rake deploy
# rake deploy["Commit message"]
desc "Deploy the source to it's remote git repository"
task :deploy, :message do |t, args|
  message = args[:message]
  if message.nil? or message.empty?
    execute("git add .")
    execute("git commit -m \"#{GITMSG}\".")
    execute("git push origin master")
    puts "The source was deployed."
  else
    execute("git add .")
    execute("git commit -m \"#{message}\".")
    execute("git push origin master")
    puts "The source was deployed."
  end
end
