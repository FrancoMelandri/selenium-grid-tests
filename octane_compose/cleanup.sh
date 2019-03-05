#!/bin/sh

# This cleanup script will clean the Octane installation from your server.  It assumes that all the default options were taken.  
# if non standard options were used please adjust accordingly. 

# destroy NGA container assembly
docker-compose rm -f

# cleanup created folders
rm -rf ./docker/octane
rm -rf ./docker/oracledata