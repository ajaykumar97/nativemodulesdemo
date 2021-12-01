#import "NBridge.h"

@implementation NBridge

RCT_EXPORT_MODULE(NBridge)

RCT_EXPORT_METHOD(resolvePromiseWithString:(NSString *)name
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
    return resolve([[@"Supplied name \"" stringByAppendingString:name] stringByAppendingString:@"\" meets the criteria"]);
}

RCT_EXPORT_METHOD(rejectPromise:(NSString *)name
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  return reject(@"Error", [[@"Supplied name \"" stringByAppendingString:name] stringByAppendingString:@"\" does not meet the criteria"], nil);
}

RCT_EXPORT_METHOD(resolvePromiseWithJson:(NSDictionary *)options
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{

  NSDictionary *result = @{
        @"age": @20
      };

  
  NSMutableDictionary * combinedOptions = [options mutableCopy];
  [combinedOptions addEntriesFromDictionary:result];

  return resolve(combinedOptions);
}

@end
