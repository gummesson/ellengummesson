# Standard Library
require 'rbconfig'

# Gems
require 'rake'

# Language encoding
LANG = "sv_SV.UTF-8"

# Check OS and set the command
if RbConfig::CONFIG["host_os"] =~ /mswin|mingw|windows/
  SET = "set"
else
  SET = "export"
end

# Transfer settings
ROBOCOPY = "_site/ D:/Git/gummesson.github.com/ /e"
RSYNC    = "-av _site/ ~/Git/gummesson.github.com/"

# Default Git message
GITMSG = "Updated"

# Set "rake build" as default
task :default => [:build]

# rake build
desc "Build the site (and convert Sass to CSS)"
task :build do
  Rake::Task["build:js"].invoke
  system "#{SET} LANG=#{LANG} && compass compile && jekyll"
  Rake::Task["build:html"].invoke
end

# rake js
namespace :build do
  task :js do
    puts "Concatenating and compressing the JS files..."
    FileUtils.rm("assets/js/global.js")

    Dir["assets/js/scripts/*.js"].each do |filename|
      file = File.read(filename)
      File.open("assets/js/global.js", "a") do |global|
        global.write(file)
      end
    end
    system "uglifyjs assets/js/global.js --compress --mangle --output assets/js/global.js"
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
desc "Build and watch the site (with an optional post limit)"
task :watch, :number do |t, args|
  number = args[:number]
  if number.nil? or number.empty?
    system "#{SET} LANG=#{LANG} && jekyll --auto --server --url http://localhost:4000/"
  else
    system "#{SET} LANG=#{LANG} && jekyll --auto --server --url http://localhost:4000/ --limit_posts=#{number}"
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
    system "robocopy #{ROBOCOPY}"
    puts "The _site directory was transfered."

  elsif command == "rsync"
    Rake::Task[:build].invoke
    system "rsync #{RSYNC}" 
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
    system "git add ."
    system "git commit -m \"#{GITMSG}\"."
    system "git push origin master"
    puts "The source was deployed."
  else
    system "git add ."
    system "git commit -m \"#{message}\"." 
    system "git push origin master"
    puts "The source was deployed."
  end
end
