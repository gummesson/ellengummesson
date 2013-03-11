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

# Sass/SCSS config directory
CONFDIR = "assets/"

# Transfer settings
RBCOPY = "_site/ D:/Git/gummesson.github.com/ /e"
RSYNC  = "-av _site/ ~/Git/gummesson.github.com/"

# Default Git message
GITMSG = "Updated."

# Set "rake build" as default
task :default => :build

# rake build
desc "Build the site (and convert Sass to CSS)"
task :build do
  system "cd #{CONFDIR} && compass compile && cd ../"
  system "#{SET} LANG=#{LANG} && jekyll"
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
    system "robocopy #{RBCOPY}"
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
    system "git commit -m \"#{GITMSG}\""
    system "git push origin master"
    puts "The source was deployed."
  else
    system "git add ."
    system "git commit -m \"#{message}\"" 
    system "git push origin master"
    puts "The source was deployed."
  end
end
